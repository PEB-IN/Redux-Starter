import { ADD_NAME, DELETE_NAME } from "./actionTypes";

const addName = (name) => {
  return {
    type: ADD_NAME,
    payload: name,
  };
};

const deleteName = () => {
  return {
    type: DELETE_NAME,
  };
};

export { addName, deleteName };
