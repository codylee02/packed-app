import React from "react";

import Title from "../../components/Title/Title";
import ListItems from "../../components/ListItems/ListItems";
import listApiService from "../../services/list-api-service";
import PackingListsTab from "../PackingListsTab/PackingListsTab";
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
      selectedTemplateId: null,
      width: window.innerWidth
    };
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

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
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentDidUpdate(prevProps) {
    const listId = this.props.match.params.id;
    if (listId !== prevProps.match.params.id) {
      listApiService
        .getListItems(listId)
        .then(listItems => this.setState({ ...listItems }));
    }
  }

  render() {
    const items = this.state.listItems
      ? this.state.listItems.map(item => (
          <ListItems
            handleDeleteListItem={this.handleDeleteListItem}
            handlePackedToggle={this.handlePackedToggle}
            item={{ ...item }}
            key={item.id}
          />
        ))
      : null;

    const templateNames = this.state.templates
      ? this.state.templates.map(template => (
          <option value={template.id} key={template.id}>
            {template.name}
          </option>
        ))
      : null;

    const { width } = this.state;
    const isMobile = width <= 768;

    if (isMobile) {
      return (
        <div className="List">
          <Title listName={this.state.listName} />
          <div className="List__scroll">
            <ul className="List__ul">
              <li className="List__li">
                <form className="List__form" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="new_item"
                    placeholder="New Item..."
                    required
                  ></input>
                  <button className="List__button">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </form>
              </li>
              <li className="List__li">
                <form
                  className="List__form"
                  onSubmit={this.handleImportTemplate}
                >
                  <select onChange={this.handleDropdownChange}>
                    <option>Add Items From Template...</option>
                    {templateNames}
                  </select>
                  <button className="List__button">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </form>
              </li>
              {items}
            </ul>
          </div>
        </div>
      );
    } else
      return (
        <>
          <PackingListsTab />
          <div className="List">
            <Title listName={this.state.listName} />
            <ul className="List__ul">
              <li className="List__li">
                <form className="List__form" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="new_item"
                    placeholder="New Item..."
                    required
                  ></input>

                  <button className="List__button">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </form>
              </li>
              <li className="List__li">
                <form
                  className="List__form"
                  onSubmit={this.handleImportTemplate}
                >
                  <select onChange={this.handleDropdownChange}>
                    <option>Add Items From Template...</option>
                    {templateNames}
                  </select>
                  <button className="List__button">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </form>
              </li>
              {items}
            </ul>
          </div>
        </>
      );
  }
}
