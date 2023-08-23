import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavMenu from "../shared/NavMenu/NavMenu";

const Main = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
