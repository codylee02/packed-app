import React from "react";

import Title from "../Title/Title";
import ListItems from "../ListItems/ListItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Template.css";

export default class Template extends React.Component {
  render() {
    const itemsInTemplate = this.props.STORE.templateItems.filter(
      item => item.templateId === Number(this.props.match.params.id)
    );

    const items = itemsInTemplate.map((item, key) => (
      <ListItems item={{ ...item }} STORE={this.props.STORE} key={key} />
    ));

    return (
      <div>
        <Title
          templatesId={this.props.match.params.id}
          listType={this.props.listType}
          STORE={this.props.STORE}
        />

        <ul className="list">
          <li className="items">
            <div className="item-name">
              <input type="text" placeholder="New Item..."></input>
            </div>
            <div className="item-control-bar">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </li>
          <li className="items">
            <div className="item-name">
              <select>
                <option>Add to new list...</option>
                <option>Weekend Camping Trip</option>
                <option>School Daypack</option>
                <option>Wedding Photo Shoot</option>
                <option>Work Presentation</option>
                <option>Surfing Trip</option>
              </select>
            </div>
            <div className="item-control-bar">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </li>
          {items}
        </ul>
      </div>
    );
  }
}
