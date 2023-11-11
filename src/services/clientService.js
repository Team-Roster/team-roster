/** @format */

import clients from "#models/clients.js";

export default () => {
  return {
    create: async function (data) {
      return await clients().create(data);
    },
    get: async function (id) {
      return await clients().get(id);
    },
    list: async function () {
      return await clients().where();
    },
    where: async function (where) {
      return await clients().where(where);
    },
    update: async function (id, data) {
      return await clients().update(id, data);
    },
    delete: async function (id) {
      return await clients().delete(id);
    },
  };
};
