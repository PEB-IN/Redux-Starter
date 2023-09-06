import axios from "axios";
import { ADD_NAME, DELETE_NAME } from "./actionTypes";

const addName = (name, todo) => {
  return {
    type: ADD_NAME,
    payload: name,
    todo: todo,
  };
};

const deleteName = () => {
  return {
    type: DELETE_NAME,
  };
};

export { addName, deleteName };
