import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
const UpdateTeacher = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [isMarried, setIsMarried] = useState("");
  let [subject, setSubject] = useState("");
  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/teachers/${id}`,
        method: "get",
      });
      let data = result.data.result;
      setName(data.name);
      setAge(data.age);
      setIsMarried(data.isMarried);
      setSubject(data.subject);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let handleSubmit = async (e) => {
    e.preventDefault();
    //e.preventDefault is done to prevent default property(refresh)
    let data = {
      name: name,
      age: age,
      isMarried: isMarried,
      subject: subject,
    };
    //hit api using axios
    try {
      let result = await axios({
        url: `http://localhost:8000/teachers/${id}`,
        method: "patch",
        data: data,
      });

      // setAge("");
      // setName("");
      // setIsMarried(false);
      navigate(`/teacher/${id}`);
      toast.success(result.data.message);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }

    // console.log(data)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="isMarried">isMarried</label>
          <input
            type="checkbox"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateTeacher;
