import React from "react";

import Title from "../Title/Title";
import ListItems from "../ListItems/ListItems";
import templateApiService from "../services/template-api-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Template.css";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      templateItems: [],
      templateName: null
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { new_item } = ev.target;
    const name = new_item.value;
    const templateId = this.props.match.params.id;

    templateApiService
      .postNewTemplateItem(name, templateId)
      .then(newItem =>
        this.setState({ templateItems: [...this.state.templateItems, newItem] })
      )
      .then(() => {
        new_item.value = "";
      })
      .catch(res => this.setState({ error: res.error }));
  };

  componentDidMount() {
    const templateId = this.props.match.params.id;

    templateApiService
      .getTemplateItems(templateId)
      .then(templateItems => this.setState({ ...templateItems }));
  }

  render() {
    const items = this.state.templateItems.map((item, key) => (
      <ListItems item={{ ...item }} key={key} />
    ));

    return (
      <div>
        <Title listName={this.state.templateName} listType="template" />

        <ul className="list">
          <li className="items">
            <form className="item-name" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="new_item"
                placeholder="New Item..."
              ></input>
              <button className="submit-button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </form>
          </li>
          {items}
        </ul>
      </div>
    );
  }
}
