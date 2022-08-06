import { combineReducers } from "redux";
import { cakeReducer } from "./Reducer/cakeReducer";
import { iceReducer } from "./Reducer/iceReducer";
import { asyncPostReducer } from "./Reducer/postReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  post: asyncPostReducer,
});

export default rootReducer;
