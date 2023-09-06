import React from "react";
// import { Provider } from "react-redux";
import { createStore } from "redux";
// import { legacy_createStore as createStore } from "redux";

// Selector

// export const VADIVELU_COMEDY = "VADIVELU_COMEDY";
// export const GOUNDAMANY_COMEDY = "GOUNDAMANY_COMEDY";

// Action

// export const VadiveluAction = () => ({ type: "VADIVELU_COMEDY" });
// export const GoundamanyAction = () => ({ type: "GOUNDAMANY_COMEDY" });

// Reducer

const ComedyReducer = (state, action) => {
  switch (action.type) {
    case VADIVELU_COMEDY:
      return (state = "Kadupethuraar My Lord");

    case GOUNDAMANY_COMEDY:
      return (state = "Ha Ha Ha");

    default:
      return (state = "No Comedy selected");
  }
};

// Store

export const store = createStore();
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(VADIVELU_COMEDY());

// const Redux = (children) => {
//   return <Provider>{children}</Provider>;
// };

export default Redux;
