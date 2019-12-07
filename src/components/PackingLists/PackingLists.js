import React from "react";
import { NavLink } from "react-router-dom";
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
      <li className={`PackingLists__li`}>
        <NavLink to={`/list/${this.props.id}`} className="PackingLists__link">
          <div className="PackingLists__title">{this.props.name}</div>{" "}
        </NavLink>
        <div className="PackingLists__controls">
          <div className="PackingLists__count">
            {this.state.packedItemCount}/{this.state.totalItemCount}
          </div>
          <button
            className="PackingLists__delete-button"
            onClick={this.handleDeleteClick}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </li>
    );
  }
}
