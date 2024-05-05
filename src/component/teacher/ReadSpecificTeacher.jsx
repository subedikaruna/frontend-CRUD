import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificTeacher = () => {
  let [teacher, setTeacher] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/teachers/${params.id}`,
        method: "get",
      });
      setTeacher(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>name is{teacher.name}</p>
      <p>age is{teacher.age}</p>
      <p>isMarried is{teacher.isMarried === true ? "yes" : "no"}</p>
      <p>subject is{teacher.subject}</p>
    </div>
  );
};

export default ReadSpecificTeacher;
