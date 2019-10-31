import React from "react";

import "./TemplatesTab.css";
import TemplateList from "../TemplateList/TemplateList";

export default class Templates extends React.Component {
  render() {
    const templates = this.props.STORE.templates
      ? this.props.STORE.templates.map((templateName, key) => (
          <TemplateList
            className="template-list"
            {...templateName}
            STORE={this.props.STORE}
            key={key}
          />
        ))
      : null;

    return <ul className="templates-list">{templates}</ul>;
  }
}
