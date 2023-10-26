import eventService from "#services/eventService.js";

export default () => {
  return {
    create: async function (data) {
      return { create: data };
    },
    get: async function (id) {
      return { get: id };
    },
    delete: async function (id) {
      return { delete: id };
    },
    update: async function (id) {
      return { update: id };
    },
  };
};
