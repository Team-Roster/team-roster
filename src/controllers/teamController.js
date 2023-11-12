/** @format */

import teamService from "#services/teamService.js";

export default () => {
  return {
    create: async function (data) {
      return await teamService().create(data);
    },
    get: async function (id) {
      return await teamService().get(id);
    },
    list: async function (query) {
      return await teamService().list(query);
    },
    update: async function (id, data) {
      return await teamService().update(id, data);
    },
    delete: async function (id) {
      return await teamService().delete(id);
    },
  };
};
