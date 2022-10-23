import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full h-full">{children}</main>
    </>
  );
};

export default Layout;
