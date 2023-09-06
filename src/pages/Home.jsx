import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, deleteName } from "../redux-react/actions/userAction";
import Demo from "./Demo";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [demoname, setdemoname] = useState("demonamee with usestate component");
  const { name, age } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const ChangeName = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        dispatch(addName("new name", response.data));
      })
      .catch((error) => console.log(error));
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
