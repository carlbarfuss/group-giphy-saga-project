import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import App from "./components/App/App";

//sagas go here
function* watcherSaga() {
  yield takeEvery("FETCH_GIPHY", fetchGiphySaga);
  yield takeEvery("FETCH_FAV", fetchFavSaga);
}

function* fetchGiphySaga(action) {
  console.log("in fetchGiphySaga");
  try {
    const response = yield axios.get(`/api/search/${action.payload}`);
    yield put({ type: "SET_GIPHY", payload: response.data.data });
  } catch (error) {
    console.log("get SEARCH request failed", error);
  }
}

function* fetchFavSaga(action) {
  console.log("in fetchFavSaga");
  try {
    const response = yield axios.get("/api/favorite");
    yield put({ type: "SET_FAV", payload: response.data });
  } catch (error) {
    console.log("get FAVs request failed", error);
  }
}
//reducers go here
const fetchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GIPHY":
      return action.payload;
    default:
      return state;
  }
};

const setFavReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FAV":
      return action.payload;
    default:
      return state;
  }
};

//saga middleware
const sagaMiddleware = createSagaMiddleware();

//reduxstore here
const store = createStore(
  combineReducers({
    fetchReducer,
    setFavReducer,
  }),
  applyMiddleware(sagaMiddleware, logger)
);
//
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
