/** @format */

import clientService from "#services/clientService.js";

export default () => {
  return {
    create: async function (data) {
      return await clientService().create(data);
    },
    get: async function (id) {
      return await clientService().get(id);
    },
    list: async function (query) {
      return await clientService().list(query);
    },
    update: async function (id, data) {
      return await clientService().update(id, data);
    },
    delete: async function (id) {
      return await clientService().delete(id);
    },
  };
};
