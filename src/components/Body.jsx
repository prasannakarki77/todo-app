import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./Todos";
import { useContext } from "react";
import Active from "./Active";
import Completed from "./Completed";
const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/active" element={<Active />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  );
};

export default Body;
