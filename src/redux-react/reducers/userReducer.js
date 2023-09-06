import { ADD_NAME, DELETE_NAME } from "../actions/actionTypes";

const initialState = {
  name: "VIJU JK",
  age: 23,
  todo: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
        todo: action.todo,
      };

    case DELETE_NAME:
      return {
        ...state,
        name: "VIJU J K",
      };
    default:
      return state;
  }
};
