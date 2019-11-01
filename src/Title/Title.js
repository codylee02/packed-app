import React from "react";

import "./Title.css";

export default class Title extends React.Component {
  render() {
    const listType = this.props.listType;

    //find the matching name of the list
    const matchName = listType => {
      const id = this.props.listsId || this.props.templatesId;

      const outputTitle = this.props.STORE[listType].filter(
        title => title.id === Number(id)
      );
      return outputTitle[0].name;
    };

    return <h2 className="title">{matchName(listType)}</h2>;
  }
}

Title.defaultProps = {
  STORE: {}
};
