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
      <li className="template-name">
        <Link to={`/template/${this.props.id}`} className="template-name__link">
          <div className="template-name__title">{this.props.name}</div>
        </Link>

        <div className="template-name__count">{this.state.totalItemCount}</div>
        <div
          className="template-name__delete-button"
          onClick={this.handleDeleteClick}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </li>
    );
  }
}
