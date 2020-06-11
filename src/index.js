import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";
import App from "./app.js";
import "./index.css";

const trackingId = "G-PCCG5366N1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, {
  gaOptions: { cookieFlags: "max-age=7200;secure;samesite=none" },
});

const store = configureStore();
const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./app.js", renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
