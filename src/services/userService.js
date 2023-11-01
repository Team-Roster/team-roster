/** @format */

import users from "#models/users.js";

export default () => {
  return {
    list: async function () {
      return await users().getUsers();
    },
    usersByRole: async function (role) {
      let users = await this.list();

      return users.filter((i) => i.roles.includes(role));
    },
  };
};
