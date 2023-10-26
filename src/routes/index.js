import fastify from "#infra/server.js";

import branchRoutes from "#routes/branch/branchRoutes.js";
import eventRoutes from "#routes/event/eventRoutes.js";
import roleRoutes from "#routes/role/roleRoutes.js";
import scheduleRoutes from "#routes/schedule/scheduleRoutes.js";
import teamRoutes from "#routes/team/teamRoutes.js";
import userRoutes from "#routes/user/userRoutes.js";

const registerRoutes = async () => {
  fastify.register(userRoutes, { prefix: "/user" });
  fastify.register(branchRoutes, { prefix: "/branch" });
  fastify.register(eventRoutes, { prefix: "/event" });
  fastify.register(roleRoutes, { prefix: "/role" });
  fastify.register(scheduleRoutes, { prefix: "/schedule" });
  fastify.register(teamRoutes, { prefix: "/team" });

  fastify.get("/", async (request, reply) => {
    return {
      app_name: "team roster",
      version: "0.1",
      beta: true,
    };
  });
};

export default registerRoutes;
