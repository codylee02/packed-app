import React from "react";
import { Link } from "react-router-dom";

import "./TemplateList.css";

export default class TemplateList extends React.Component {
  render() {
    const templateId = this.props.id;

    //get the total items in each tepmlate list
    const totalItems = templateId => {
      let count = 0;
      for (let i = 0; i < this.props.STORE.templateItems.length; i++) {
        if (templateId === this.props.STORE.templateItems[i].templateId) {
          count++;
        }
      }
      return count;
    };

    return (
      <Link to={`/template/${templateId}`} className="template-name__link">
        <li className="template-name">
          <div className="template-name__title">{this.props.name}</div>
          <div className="template-name__count">{totalItems(templateId)}</div>
        </li>
      </Link>
    );
  }
}
