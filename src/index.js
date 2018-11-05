import React from "react";
import ReactDOM from "react-dom";
import books from "./seeds";

import "./index.css";
import App from "./App";

ReactDOM.render(<App books={books} />, document.getElementById("root"));
