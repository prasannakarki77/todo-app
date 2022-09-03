import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "./Todos";
const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
    </Routes>
  );
};

export default Body;
