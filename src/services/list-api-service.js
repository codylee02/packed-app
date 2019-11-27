import TokenService from "../services/token-service";
import config from "../config";

const listApiService = {
  getLists() {
    return fetch(`${config.API_BASE_URL}/lists`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getListItemCount(listId) {
    return fetch(`${config.API_BASE_URL}/lists/${listId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postNewList(name) {
    return fetch(`${config.API_BASE_URL}/lists`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ name: name })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postNewListItem(name, listId) {
    return fetch(`${config.API_BASE_URL}/lists/${listId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ name: name })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getListItems(listId) {
    return fetch(`${config.API_BASE_URL}/lists/${listId}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  importTemplate(listId, templateId) {
    return fetch(
      `${config.API_BASE_URL}/insert-template/${listId}/${templateId}`,
      {
        method: "POST",
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteListItem(listId, itemId) {
    return fetch(`${config.API_BASE_URL}/lists/${listId}/${itemId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  }
};

export default listApiService;
