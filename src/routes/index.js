import React from "react";
import { Routes, Route } from "react-router-dom";
import Todolist from "../pages/Todolist";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Todolist />}></Route>
    </Routes>
  );
};

export default index;
