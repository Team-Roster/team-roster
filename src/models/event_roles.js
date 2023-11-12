/** @format */

import db from "#infra/db/connection";

export default () => {
  const table = db.event_roles;

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
    where: async function (data) {
      return await table.findMany({ where: data });
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
