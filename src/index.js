import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  myReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
// burda thunk ı kurduğums için, axios requestlerinin kopmayacağını, boşluğa düşmeyeceğini biliyorum. ilk olarak bunu yaptım.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
