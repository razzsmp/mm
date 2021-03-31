import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./Reudux/Store";
import serverinvite from "./Components/Discord/Invite/invite";


ReactDOM.render(
  <Provider store={store}>
    <Browser
      <App />
       <Route exacth path="/invite/:id" component={serverinvite} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
