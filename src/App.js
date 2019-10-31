import React from "react";
import { Route } from "react-router-dom";
import STORE from "./STORE";

import "./App.css";

import Nav from "./Nav/Nav";
import PackingListsTab from "./PackingListsTab/PackingListsTab";
import TemplatesTab from "./TemplatesTab/TemplatesTab";

function App() {
  return (
    <main className="App">
      <Route path="/" component={Nav} />
      <Route
        path="/lists"
        component={() => <PackingListsTab STORE={STORE} />}
      />
      <Route
        path="/templates"
        component={() => <TemplatesTab STORE={STORE} />}
      />
    </main>
  );
}

export default App;
