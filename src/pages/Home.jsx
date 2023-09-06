import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, deleteName } from "../redux-react/actions/userAction";
import Demo from "./Demo";
import { useState } from "react";

const Home = () => {
  const [demoname, setdemoname] = useState("demonamee with usestate component");
  const { name, age } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const ChangeName = () => {
    dispatch(addName("new name"));
  };
  return (
    <>
      <div>
        <h2> Name {name}</h2>
        <h2> Age {age}</h2>
        <h2>useState {demoname}</h2>
        <button onClick={ChangeName} className="btn btn-primary">
          Change Name
        </button>
        <Demo />
      </div>
    </>
  );
};

export default Home;
