/** @format */

import scheduleService from "#services/scheduleService.js";

export default () => {
  return {
    create: async function (data) {
      return await scheduleService().createSchedule(data);
    },
    get: async function (id) {
      return { get: id };
    },
    list: async function (branch, team) {
      // parseInt(branch), parseInt(team)
      return await scheduleService().list(branch, team);
    },
    delete: async function (id) {
      return { delete: id };
    },
    update: async function (id) {
      return { update: id };
    },
  };
};
