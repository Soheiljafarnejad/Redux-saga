import axios from "axios";
import * as t from "../Types";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPostFailure, fetchPostSuccess } from "../Actions/PostActions";

function* fetchPost(action) {
  try {
    const response = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${action.payload}`)
    );
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostFailure(error.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(t.FETCH_POST_REQUEST, fetchPost);
}
