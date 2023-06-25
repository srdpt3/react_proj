import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
