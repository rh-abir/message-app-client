import { applyMiddleware, combineReducers, compose } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import thinkMiddleware from "redux-thunk";

const rootReducer = combineReducers({});

const middleware = [thinkMiddleware];

const store = configureStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
