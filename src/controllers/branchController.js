/** @format */

import branchService from "#services/branchService.js";

export default () => {
  return {
    create: async function (data) {
      return await branchService().create(data);
    },
    get: async function (id) {
      return await branchService().get(id);
    },
    list: async function (query) {
      return await branchService().list(query);
    },
    update: async function (id, data) {
      return await branchService().update(id, data);
    },
    delete: async function (id) {
      return await branchService().delete(id);
    },
  };
};
