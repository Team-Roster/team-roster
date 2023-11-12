/** @format */

import db from "#infra/db/connection";

export default () => {
  const table = db.branches;

  return {
    create: async function (data) {
      try {
        return await table.create({ data });
      } catch (e) {
        return {
          error: true,
          message: e.message,
          data,
        };
      }
    },
    get: async function (id) {
      return await table.findUnique({
        where: { id },
      });
    },
    where: async function (where) {
      return await table.findMany({ where });
    },
    update: async function (id, data) {
      return await table.update({
        where: { id },
        data,
      });
    },
    delete: async function (id) {
      return await table.delete({
        where: { id },
      });
    },
  };
};
