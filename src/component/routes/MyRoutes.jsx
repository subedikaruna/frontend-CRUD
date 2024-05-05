import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateStudent from "../student/CreateStudent";
import ReadAllStudent from "../student/ReadAllStudent";
import CreateTeacher from "../teacher/CreateTeacher";
import ReadSpecificStudent from "../student/ReadSpecificStudent";
import UpdateStudent from "../student/UpdateStudent";
import ReadAllTeacher from "../teacher/ReadAllTeacher";
import ReadSpecificTeacher from "../teacher/ReadSpecificTeacher";
import UpdateTeacher from "../teacher/UpdateTeacher";
import CreateProduct from "../product/CreateProduct";
import ReadAllProduct from "../product/ReadAllProduct";
import ReadSpecificProduct from "../product/ReadSpecificProduct";
import UpdateProduct from "../product/UpdateProduct";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/student/create"
          element={<CreateStudent></CreateStudent>}
        ></Route>

        <Route
          path="/student"
          element={<ReadAllStudent></ReadAllStudent>}
        ></Route>
        <Route
          path="/student/:id"
          element={<ReadSpecificStudent></ReadSpecificStudent>}
        ></Route>
        <Route
          path="/student/update/:id"
          element={<UpdateStudent></UpdateStudent>}
        ></Route>
        <Route
          path="/teacher/create"
          element={<CreateTeacher></CreateTeacher>}
        ></Route>
        <Route
          path="/teacher"
          element={<ReadAllTeacher></ReadAllTeacher>}
        ></Route>
        <Route
          path="/teacher/:id"
          element={<ReadSpecificTeacher></ReadSpecificTeacher>}
        ></Route>
        <Route
          path="/teacher/update/:id"
          element={<UpdateTeacher></UpdateTeacher>}
        ></Route>
        <Route
          path="/product/create"
          element={<CreateProduct></CreateProduct>}
        ></Route>
        <Route
          path="/product"
          element={<ReadAllProduct></ReadAllProduct>}
        ></Route>
        <Route
          path="/product/:id"
          element={<ReadSpecificProduct></ReadSpecificProduct>}
        ></Route>
        <Route
          path="/product/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
