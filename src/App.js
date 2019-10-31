import React from "react";
import { Route } from "react-router-dom";
import STORE from "./STORE";

import "./App.css";

import Nav from "./Nav/Nav";
import Lists from "./Lists/Lists";

function App() {
  return (
    <main className="App">
      <Route path="/" component={Nav} />
      <Route path="/lists" component={() => <Lists STORE={STORE} />} />
    </main>
  );
}

export default App;
