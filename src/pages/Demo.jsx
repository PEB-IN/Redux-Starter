import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Demo = () => {
  const { name, age, todo } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Name {name}</h1>
      <h1>todo name {todo && todo?.title}</h1>
    </div>
  );
};

export default Demo;
