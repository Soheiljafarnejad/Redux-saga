import * as t from "../Types";

export const fetchPostRequest = (id) => {
  return {
    type: t.FETCH_POST_REQUEST,
    payload: id,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: t.FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: t.FETCH_POST_FAILURE,
    payload: error,
  };
};
