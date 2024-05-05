import React from "react";
import { NavLink } from "react-router-dom";

const AppLinks = () => {
  return (
    <div>
      <NavLink to="/student/create" style={{ marginRight: "20px" }}>
        CreateStudent
      </NavLink>
      <NavLink to="/student" style={{ marginRight: "20px" }}>
        Read All Student
      </NavLink>
      <NavLink to="/teacher/create" style={{ marginRight: "20px" }}>
        CreateTeacher{" "}
      </NavLink>
      <NavLink to="/teacher" style={{ marginRight: "20px" }}>
        Read All Teacher
      </NavLink>
    </div>
  );
};

export default AppLinks;
/*
home=>localhost:5173
contact=>localhost:5173/contact
about=>localhost:5173/about
*/
