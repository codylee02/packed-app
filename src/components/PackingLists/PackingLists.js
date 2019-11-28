import React from "react";
import { Link } from "react-router-dom";
import listApiService from "../../services/list-api-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./PackingLists.css";

export default class PackingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItemCount: null,
      checkedItemCount: null
    };
  }

  handleDeleteClick = () => {
    this.props.handleDeleteList(this.props.id);
  };

  componentDidMount() {
    const listId = this.props.id;
    //get the total items in each list
    listApiService.getListItemCount(listId).then(list => {
      let totalItemCount = 0;
      let packedItemCount = 0;

      list.listItems.forEach(function(listItem) {
        totalItemCount++;
        if (listItem.packed === true) {
          packedItemCount++;
        }
      });
      this.setState({ packedItemCount, totalItemCount });
    });
  }

  render() {
    return (
      <li className="list-name">
        <Link to={`/list/${this.props.id}`} className="list-name__link">
          <div className="list-name__title">{this.props.name}</div>{" "}
        </Link>
        <div
          className="list-name__delete-button"
          onClick={this.handleDeleteClick}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
        <div className="list-name__count">
          {this.state.packedItemCount}/{this.state.totalItemCount}
        </div>
      </li>
    );
  }
}
