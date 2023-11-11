/** @format */

import clientController from "#controllers/clientController.js";

export default function (fastify, opts, done) {
  fastify.zod.post(
    "/client",
    { body: "client.create" },
    async (request, reply) => {
      return await clientController().create(request.body);
    }
  );

  fastify.zod.get(
    "/client/:id",
    { params: "client.get" },
    async (request, reply) => {
      const { id } = request.params;
      return await clientController().get(id);
    }
  );

  fastify.zod.get(
    "/client",
    { querystring: "client.list" },
    async (request, reply) => {
      return await clientController().list(request.query);
    }
  );

  fastify.zod.patch(
    "/client/:id",
    { params: "client.updateId", body: "client.updateData" },
    async (request, reply) => {
      const { id } = request.params;
      return await clientController().update(id, request.body);
    }
  );

  fastify.zod.delete(
    "/client/:id",
    { params: "client.delete" },
    async (request, reply) => {
      const { id } = request.params;
      return await clientController().delete(id);
    }
  );

  done();
}
