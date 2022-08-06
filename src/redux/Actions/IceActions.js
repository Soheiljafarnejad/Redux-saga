import * as t from "../Types";

export const buyIce = (value) => {
  return {
    type: t.BUY_ICE,
    payload: value,
  };
};
