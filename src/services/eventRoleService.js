/** @format */

import teams from "#models/event_roles.js";

export default () => {
  return {
    create: async function (data) {
      return await teams().create(data);
    },
    get: async function (id) {
      return await teams().get(id);
    },
    list: async function () {
      return await teams().where();
    },
    where: async function (where) {
      return await teams().where(where);
    },
    update: async function (id, data) {
      return await teams().update(id, data);
    },
    delete: async function (id) {
      return await teams().delete(id);
    },
  };
};
