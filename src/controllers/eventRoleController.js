/** @format */

import eventRoleService from "#services/eventRoleService.js";

export default () => {
  return {
    create: async function (data) {
      return await eventRoleService().create(data);
    },
    get: async function (id) {
      return await eventRoleService().get(id);
    },
    list: async function (query) {
      return await eventRoleService().list(query);
    },
    listByTeam: async function (team_id) {
      return await eventRoleService().where({ team_id });
    },
    update: async function (id, data) {
      return await eventRoleService().update(id, data);
    },
    delete: async function (id) {
      return await eventRoleService().delete(id);
    },
  };
};
