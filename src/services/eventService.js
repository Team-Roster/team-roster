import events from "#models/events.js";

export default () => {
  return {
    list: async function () {
      return await events().getEvents();
    },
  };
};
