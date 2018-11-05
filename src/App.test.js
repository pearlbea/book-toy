import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import books from "./seeds";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App books={books} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
