import React from "react";
import { Route } from "react-router-dom";
import STORE from "./STORE";

import "./App.css";

import Nav from "./Nav/Nav";
import PackingListsTab from "./PackingListsTab/PackingListsTab";
import TemplatesTab from "./TemplatesTab/TemplatesTab";
import List from "./List/List";
import Template from "./Template/Template";

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

      <Route
        path={"/list/:id"}
        component={props => (
          <List
            listType="lists"
            {...props}
            STORE={STORE}
            itemsFrom={"listItems"}
          />
        )}
      />
      <Route
        path={"/template/:id"}
        component={props => (
          <Template
            listType="templates"
            {...props}
            STORE={STORE}
            itemsFrom={"templateItems"}
          />
        )}
      />
    </main>
  );
}

export default App;
