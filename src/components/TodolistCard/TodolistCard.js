import React from "react";
import Card from "../Card/Card";
import Title from "./Title";

const TodolistCard = () => {
  return (
    <div>
      <Card topContent={<Title />} />
    </div>
  );
};

export default TodolistCard;
