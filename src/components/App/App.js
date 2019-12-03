import React from "react";
import { Switch, Route } from "react-router-dom";

import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import PrivateRoute from "../Utils/PrivateRoute";
import Nav from "../Nav/Nav";
import PackingListsTab from "../../routes/PackingListsTab/PackingListsTab";
import TemplatesTab from "../../routes/TemplatesTab/TemplatesTab";
import List from "../List/List";
import Template from "../Template/Template";
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import LoginPage from "../../routes/LoginPage/LoginPage";

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

        <PrivateRoute path="/lists" component={() => <PackingListsTab />} />
        <PrivateRoute path="/templates" component={() => <TemplatesTab />} />

        <PrivateRoute
          path={"/list/:id"}
          component={props => (
            <List listType="lists" {...props} itemsFrom={"listItems"} />
          )}
        />
        <PrivateRoute
          path={"/template/:id"}
          component={props => (
            <Template
              listType="templates"
              {...props}
              itemsFrom={"templateItems"}
            />
          )}
        />
      </main>
    );
  }
}

export default App;
