import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import MyContainer from "../components/MyContainer/MyContainer";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <MyContainer>
          <Outlet></Outlet>
        </MyContainer>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
