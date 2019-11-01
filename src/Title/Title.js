import React from "react";

import "./Title.css";

export default class Title extends React.Component {
  render() {
    //find out if the incoming URL is a list, or template to get the title
    const ListOrTemplate = () => {
      const url = this.props.match.url;
      if (url.includes("list")) {
        return "lists";
      }
      if (url.includes("template")) {
        return "templates";
      }
    };

    //find out the tile using ListOrTemplate function to check what is is getting the title for
    const title = ListOrTemplate => {
      const id = this.props.match.params.id;

      //possibly reformat from .filter to returning the object that contains a key/value pair
      const outputTitle = this.props.STORE[ListOrTemplate].filter(
        title => title.id === Number(id)
      );
      return outputTitle[0].name;
    };

    return <h1 className="title">{title(ListOrTemplate())}</h1>;
  }
}

Title.defaultProps = {
  STORE: {}
};
