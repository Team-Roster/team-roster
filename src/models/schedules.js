/** @format */

import db from "#infra/db/connection";

export default () => {
  const table = db.schedules;

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
    firstOrCreate: async function (where, update, create) {
      return await table.upsert({ where, update, create });
    },
  };
};
