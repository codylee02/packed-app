import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Template from "./Template";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Template />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
