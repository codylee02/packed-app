import TokenService from "../services/token-service";
import config from "../config";

const templateApiService = {
  getTemplates() {
    return fetch(`${config.API_BASE_URL}/templates`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getTemplateItems(templateId) {
    return fetch(`${config.API_BASE_URL}/templates/${templateId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postNewTemplate(name) {
    return fetch(`${config.API_BASE_URL}/templates`, {
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
  postNewTemplateItem(name, templateId) {
    return fetch(`${config.API_BASE_URL}/templates/${templateId}`, {
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
  deleteListItem(templateId, itemId) {
    return fetch(`${config.API_BASE_URL}/templates/${templateId}/${itemId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  },
  deleteTemplate(templateId) {
    return fetch(`${config.API_BASE_URL}/templates/${templateId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  }
};

export default templateApiService;
