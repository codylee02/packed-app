import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import LandingPageNav from "./LandingPageNav";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LandingPageNav />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
