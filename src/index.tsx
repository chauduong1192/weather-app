import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/common.scss";

const AppLazyLoad = lazy(() => import("./components/App"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Suspense fallback={<></>}>
        <AppLazyLoad />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
