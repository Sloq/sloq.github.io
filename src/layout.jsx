import React from "react";
import {Outlet} from "react-router-dom";
import NavbarContainer from "./navbar/navbarContainer";

const Layout = () => {
  return (
    <>
      <NavbarContainer />
      <Outlet />
    </>
  );
};

export default Layout;