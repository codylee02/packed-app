import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Section } from "../../components/Utils/Utils";

export default function LoginPage(props) {
  function handleLoginSuccess() {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/lists";
    history.push(destination);
  }

  return (
    <Section className="LoginPage">
      <h2>Login</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </Section>
  );
}

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {}
  }
};
