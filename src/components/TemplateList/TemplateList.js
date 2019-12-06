import React from "react";
import { Link } from "react-router-dom";
import templateApiService from "../../services/template-api-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TemplateList.css";

export default class TemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItemCount: null
    };
  }

  handleDeleteClick = () => {
    this.props.handleDeleteTemplate(this.props.id);
  };

  componentDidMount() {
    const templateId = this.props.id;

    //get the total items in each template list
    templateApiService.getTemplateItemCount(templateId).then(template => {
      this.setState({ totalItemCount: template.templateItems.length });
    });
  }

  render() {
    return (
      <li className="TemplateList__li">
        <Link to={`/template/${this.props.id}`} className="TemplateList__link">
          <div className="TemplateList__title">{this.props.name}</div>
        </Link>
        <div className="TemplateList__controls">
          <div className="TemplateList__count">{this.state.totalItemCount}</div>
          <button
            className="TemplateList__delete-button"
            onClick={this.handleDeleteClick}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </li>
    );
  }
}
