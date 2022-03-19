import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
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
