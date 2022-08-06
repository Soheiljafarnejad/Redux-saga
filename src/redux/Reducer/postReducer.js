import * as t from "../Types";

const initState = {
  data: {},
  loading: false,
  error: false,
};

export const asyncPostReducer = (state = initState, action) => {
  switch (action.type) {
    case t.FETCH_POST_REQUEST:
      return { ...state, loading: true, data: {}, error: false };
    case t.FETCH_POST_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: false };
    case t.FETCH_POST_FAILURE:
      return { ...state, loading: false, data: {}, error: action.payload };
    default:
      return state;
  }
};
