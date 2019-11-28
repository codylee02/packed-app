import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import TemplateList from './TemplateList'

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <TemplateList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
