import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import PackingListsTab from "./PackingListsTab";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <PackingListsTab />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
