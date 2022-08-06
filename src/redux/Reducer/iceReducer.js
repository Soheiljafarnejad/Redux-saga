import * as t from "../Types";

const initState = {
  numOfIce: 15,
};

export const iceReducer = (state = initState, action) => {
  switch (action.type) {
    case t.BUY_ICE:
      return { ...state, numOfIce: state.numOfIce - action.payload };
    default:
      return state;
  }
};
