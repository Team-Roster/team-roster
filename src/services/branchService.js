/** @format */

import branches from "#models/branches.js";

export default () => {
  return {
    create: async function (data) {
      return await branches().create(data);
    },
    get: async function (id) {
      return await branches().get(id);
    },
    list: async function () {
      return await branches().where();
    },
    where: async function (where) {
      return await branches().where(where);
    },
    update: async function (id, data) {
      return await branches().update(id, data);
    },
    delete: async function (id) {
      return await branches().delete(id);
    },
  };
};
