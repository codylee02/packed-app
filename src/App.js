import React from "react";
import { Route, Switch } from "react-router-dom";
import STORE from "./STORE";

import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import PrivateRoute from "./components/Utils/PrivateRoute";
import Nav from "./Nav/Nav";
import PackingListsTab from "./PackingListsTab/PackingListsTab";
import TemplatesTab from "./TemplatesTab/TemplatesTab";
import List from "./List/List";
import Template from "./Template/Template";
import LandingPage from "./LandingPage/LandingPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import LoginPage from "./routes/LoginPage/LoginPage";

import "./App.css";

class App extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
      <main className="App">
        {this.state.hasError && <p className="red">There was an error!</p>}

        <Switch>
          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute path={"/register"} component={RegistrationPage} />

          <PrivateRoute path="/lists" component={Nav} />
          <PrivateRoute path="/list" component={Nav} />
          <PrivateRoute path="/templates" component={Nav} />
          <PrivateRoute path="/template" component={Nav} />
        </Switch>
        <Route exact path="/" component={LandingPage} />

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
}

export default App;
