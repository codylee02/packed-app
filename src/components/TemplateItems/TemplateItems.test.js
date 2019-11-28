import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import TemplateItems from "./Templateitems";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <TemplateItems />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
