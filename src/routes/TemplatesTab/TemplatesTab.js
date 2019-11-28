import React from "react";

import "./TemplatesTab.css";
import TemplateList from "../../components/TemplateList/TemplateList";
import templateApiService from "../../services/template-api-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class Templates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      templates: []
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { new_template } = ev.target;
    const name = new_template.value;
    this.setState({ error: null });

    templateApiService
      .postNewTemplate(name)
      .then(name =>
        this.setState({ templates: [...this.state.templates, name] })
      )
      .then(() => {
        new_template.value = "";
      })
      .catch(res => this.setState({ error: res.error }));
  };

  handleDeleteTemplate = templateId => {
    templateApiService.deleteTemplate(templateId).then(() => {
      this.setState({
        templates: this.state.templates.filter(
          template => template.id !== templateId
        )
      });
    });
  };

  componentDidMount() {
    templateApiService
      .getTemplates()
      .then(templates => this.setState({ templates: templates }));
  }
  render() {
    const templates = this.state.templates
      ? this.state.templates.map(template => (
          <TemplateList
            handleDeleteTemplate={this.handleDeleteTemplate}
            className="template-list"
            {...template}
            key={template.id}
          />
        ))
      : null;

    return (
      <ul className="templates-list">
        <li className="template-name">
          <form className="new-template_form" onSubmit={this.handleSubmit}>
            <input
              name="new_template"
              type="text"
              placeholder="New Template..."
            ></input>
            <button type="submit" className="new-template_submit-button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
        </li>
        {templates}
      </ul>
    );
  }
}
