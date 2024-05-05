import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateTeacher = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [isMarried, setIsMarried] = useState("");
  let [subject, setSubject] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
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
              url: "http://localhost:8000/teachers",
              method: "post",
              data: data,
            });
            setAge("");
            setName("");
            setIsMarried(false);
            setSubject("");

            toast.success(result.data.message);
          } catch (error) {
            if (error.response.data.message) {
              toast.error(error.response.data.message);
            } else {
              toast.error(error.message);
            }
          }

          // console.log(data)
        }}
      >
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

        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateTeacher;
