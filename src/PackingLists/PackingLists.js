import React from "react";
import { Link } from "react-router-dom";
import listApiService from "../services/list-api-service";

import "./PackingLists.css";

export default class PackingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItemCount: null,
      checkedItemCount: null
    };
  }

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
      <Link to={`/list/${this.props.id}`} className="list-name__link">
        <li className="list-name">
          <div className="list-name__title">{this.props.name}</div>
          <div className="list-name__count">
            {this.state.packedItemCount}/{this.state.totalItemCount}
          </div>
        </li>
      </Link>
    );
  }
}
