import React from "react";

import "./Lists.css";
import ListName from "../ListName/ListName";

export default class Lists extends React.Component {
  render() {
    const lists = this.props.STORE.lists
      ? this.props.STORE.lists.map((listName, key) => (
          <ListName {...listName} STORE={this.props.STORE} key={key} />
        ))
      : null;

    return <ul className="Lists">{lists}</ul>;
  }
}
