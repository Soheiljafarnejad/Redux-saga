import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./RootReducer";
// saga
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);
