import "semantic-ui-css/semantic.min.css";

import "../semantic/dist/semantic.min.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
