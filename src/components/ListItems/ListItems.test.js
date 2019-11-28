import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ListItems from "./ListItems";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <ListItems />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
