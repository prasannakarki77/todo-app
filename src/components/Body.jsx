import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./Todos";
import { useContext } from "react";
import Active from "./Active";
const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/active" element={<Active />} />
    </Routes>
  );
};

export default Body;
