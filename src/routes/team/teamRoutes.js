/** @format */

import teamController from "#controllers/teamController.js";

export default function (fastify, opts, done) {
  fastify.zod.post("/team", { body: "team.create" }, async (request, reply) => {
    return await teamController().create(request.body);
  });

  fastify.zod.get(
    "/team/:id",
    { params: "team.get" },
    async (request, reply) => {
      const { id } = request.params;
      return await teamController().get(id);
    }
  );

  fastify.zod.get(
    "/team",
    { querystring: "team.list" },
    async (request, reply) => {
      return await teamController().list(request.query);
    }
  );

  fastify.zod.patch(
    "/team/:id",
    { params: "team.updateId", body: "team.updateData" },
    async (request, reply) => {
      const { id } = request.params;
      return await teamController().update(id, request.body);
    }
  );

  fastify.zod.delete(
    "/team/:id",
    { params: "team.delete" },
    async (request, reply) => {
      const { id } = request.params;
      return await teamController().delete(id);
    }
  );

  done();
}
