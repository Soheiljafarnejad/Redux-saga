import * as t from "../Types";

const initState = {
  numOfCake: 10,
};

export const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case t.BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - action.payload };
    default:
      return state;
  }
};
