import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { GlobalStyle } from "./style";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
