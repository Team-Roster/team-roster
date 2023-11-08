/** @format */

import db from "#infra/db/connection";

const schedules = [];

export default () => {
  return {
    getSchedules: async function () {
      return db.schedules.findMany();
    },
  };
};
