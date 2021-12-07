import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers } from "redux";
import { createStore } from "redux"; //import store
import { Provider } from "react-redux";

const initialState = { count: 0, cartItems: [] };

function reducer(state = initialState, actions) {
  const item = actions.payload;

  switch (actions.type) {
    case "CART":
      return {
        ...state,
        count: state.count + 1,
        cartItems: [...state.cartItems, item],
      };
    case "REMOVE":
      return {
        ...state,
        count: 0,
        cartItems: [],
      };

    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log RESETults (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
