import React from "react";

import "./Title.css";

export default function Title(props) {
  const listName = props.listName;

  return <h2 className="title">{listName}</h2>;
}

Title.defaultProps = {
  listName: ""
};
