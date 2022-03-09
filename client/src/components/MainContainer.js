import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import NavTabs from "./NavTabs";
import Home from "./Home";
import Cart from "./Cart";

const MainContiner = () => {
  return (
    <div>
      <NavTabs />
      <Home />
    </div>
  );
};

export default MainContiner;
