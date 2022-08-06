import * as t from "../Types";

export const buyCake = (value) => {
  return {
    type: t.BUY_CAKE,
    payload: value,
  };
};
