import React from "react";
import { Link } from "react-router-dom";
import templateApiService from "../services/template-api-service";

import "./TemplateList.css";

export default class TemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItemCount: null
    };
  }

  componentDidMount() {
    const templateId = this.props.id;

    //get the total items in each template list
    templateApiService.getTemplateItemCount(templateId).then(template => {
      this.setState({ totalItemCount: template.templateItems.length });
    });
  }

  render() {
    return (
      <Link to={`/template/${this.props.id}`} className="template-name__link">
        <li className="template-name">
          <div className="template-name__title">{this.props.name}</div>
          <div className="template-name__count">
            {this.state.totalItemCount}
          </div>
        </li>
      </Link>
    );
  }

  //   //get the total items in each tepmlate list
  //  // const totalItems = templateId => {
  //   //  let count = 0;
  //     for (let i = 0; i < props.STORE.templateItems.length; i++) {
  //       if (templateId === props.STORE.templateItems[i].templateId) {
  //         count++;
  //       }
  //     }
  //     return count;
  //   };
}
