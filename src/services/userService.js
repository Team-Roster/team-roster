/** @format */

import users from "#models/users.js";

export default (branch, team) => {
  return {
    list: async function () {
      return await users().getUsers();
    },
    usersByRole: async function (role) {
      let users = await this.list();

      return users.filter((i) => {
        // todo: filter for branch, team
        return i.roles.includes(role);
      });
    },
    usersByRoles: async function (roles) {
      let users = await this.list();

      return users.filter((i) => {
        return i.roles.some((r) => {
          // todo: filter for branch, team
          return roles.includes(r);
        });
      });
    },
    get: async function (id) {
      let users = await this.list();
      let filter = users.filter((i) => i.id === id);
      let [user] = filter;
      if (!user) throw new Error("user not found");
      return user;
    },
  };
};
