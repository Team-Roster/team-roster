/** @format */

import fastify from "#infra/server.ts";

import branchRoutes from "#routes/branch/branchRoutes.js";
import eventRoutes from "#routes/event/eventRoutes.js";
import eventRoleRoutes from "#routes/eventRole/eventRoleRoutes.js";
import scheduleRoutes from "#routes/schedule/scheduleRoutes.js";
import teamRoutes from "#routes/team/teamRoutes.js";
import userRoutes from "#routes/user/userRoutes.js";
import clientRoutes from "#routes/client/clientRoutes.js";

const registerRoutes = async () => {
  fastify.register(userRoutes, { prefix: "/user" });
  fastify.register(branchRoutes, { prefix: "/branch" });
  fastify.register(eventRoutes, { prefix: "/event" });
  fastify.register(eventRoleRoutes, { prefix: "/role" });
  fastify.register(scheduleRoutes, { prefix: "/schedule" });
  fastify.register(teamRoutes, { prefix: "/team" });
  fastify.register(clientRoutes, { prefix: "/client" });

  fastify.get("/", async (request, reply) => {
    return {
      app_name: "team roster",
      version: "0.1",
      beta: true,
    };
  });
};

export default registerRoutes;
