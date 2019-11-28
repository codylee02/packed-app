import React from "react";

import Title from "../Title/Title";
import ListItems from "../ListItems/ListItems";
import listApiService from "../../services/list-api-service";
import templateApiService from "../../services/template-api-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./List.css";

export default class List extends React.Component {
  static defaultProps = {
    match: { params: { id: 1 } }
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      listItems: [],
      listName: null,
      templates: [],
      selectedTemplateId: null
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { new_item } = ev.target;
    const name = new_item.value;
    const listId = this.props.match.params.id;

    listApiService
      .postNewListItem(name, listId)
      .then(newItem =>
        this.setState({ listItems: [...this.state.listItems, newItem] })
      )
      .then(() => {
        new_item.value = "";
      })
      .catch(res => this.setSate({ error: res.error }));
  };

  handleDropdownChange = ev => {
    this.setState({ selectedTemplateId: ev.target.value });
  };

  handleImportTemplate = ev => {
    ev.preventDefault();
    listApiService
      .importTemplate(this.props.match.params.id, this.state.selectedTemplateId)
      .then(newItems =>
        this.setState({ listItems: [...this.state.listItems, ...newItems] })
      );
  };

  handleDeleteListItem = itemId => {
    const listId = this.props.match.params.id;
    listApiService.deleteListItem(listId, itemId).then(() => {
      this.setState({
        listItems: this.state.listItems.filter(item => item.id !== itemId)
      });
    });
  };

  handlePackedToggle = (itemId, packedStatus) => {
    const listId = this.props.match.params.id;
    const newPackedStatus = !packedStatus;
    listApiService.toggleItemPacked(listId, itemId, newPackedStatus);
  };

  componentDidMount() {
    const listId = this.props.match.params.id;
    templateApiService
      .getTemplates()
      .then(templates => this.setState({ templates: templates }));

    listApiService
      .getListItems(listId)
      .then(listItems => this.setState({ ...listItems }));
  }

  render() {
    const items = this.state.listItems
      ? this.state.listItems.map((item, key) => (
          <ListItems
            handleDeleteListItem={this.handleDeleteListItem}
            handlePackedToggle={this.handlePackedToggle}
            item={{ ...item }}
            key={key}
          />
        ))
      : null;

    const templateNames = this.state.templates
      ? this.state.templates.map((template, key) => (
          <option value={template.id} key={key}>
            {template.name}
          </option>
        ))
      : null;

    return (
      <div>
        <Title listName={this.state.listName} listType={"list"} />
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
          <li className="items">
            <form className="item-name" onSubmit={this.handleImportTemplate}>
              <select onChange={this.handleDropdownChange}>
                <option>Add Items From Template...</option>
                {templateNames}
              </select>
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
