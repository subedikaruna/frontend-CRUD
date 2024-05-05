import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAllTeacher = () => {
  let [Teachers, setTeachers] = useState([]);
  let navigate = useNavigate();
  /*
    hit api on page load
    api gives data
    set data to state variable
    display data
    */
  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/teachers",
        method: "get",
      });
      setTeachers(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    let result = await axios({
      url: `http://localhost:8000/teachers/${id}`,
      method: "delete",
    });
    getData();
    console.log(result);
    toast.success(result.data.message);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {Teachers.map((item, i) => {
        return (
          <div key={i} style={{ border: "solid red 3px", margin: "10px" }}>
            <p>name is {item.name}</p>
            <p>age is {item.age}</p>
            <p>isMarried is {item.isMarried === true ? "yes" : "no"}</p>
            <p>subject is {item.subject}</p>
            <button
              onClick={() => {
                navigate(`/teacher/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/teacher/update/${item._id}`);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(item._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllTeacher;
