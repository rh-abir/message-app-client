import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, combineReducers, compose } from "redux";
import { combineReducers } from "redux";

import thunkMiddleware from "redux-thunk";

const placeholderReducer = (state = {}, action) => {
  return state;
};

const rootReducer = combineReducers({
  placeholder: placeholderReducer,
});

const middleware = [thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
  devTools: true,

  // rootReducer,
  // compose(
  //   applyMiddleware(...middleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
});

export default store;
