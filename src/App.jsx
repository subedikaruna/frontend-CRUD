import React from "react";
import MyRoutes from "./component/routes/MyRoutes";
import { NavLink } from "react-router-dom";
import AppLinks from "./component/AppLinks";

const App = () => {
  return (
    <div>
      <AppLinks></AppLinks>
      <MyRoutes></MyRoutes>
    </div>
  );
};

export default App;
