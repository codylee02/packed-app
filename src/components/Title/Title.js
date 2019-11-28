import React from "react";

import "./Title.css";

export default class Title extends React.Component {
  render() {
    const listName = this.props.listName;

    return <h2 className="title">{listName}</h2>;
  }
}

Title.defaultProps = {
  listName: ""
};
