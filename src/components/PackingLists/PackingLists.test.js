import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import PackingLists from "./PackingLists";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <PackingLists />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
