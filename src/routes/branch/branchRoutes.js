/** @format */

import branchController from "#controllers/branchController.js";

export default function (fastify, opts, done) {
  fastify.zod.post(
    "/branch",
    { body: "branch.create" },
    async (request, reply) => {
      return await branchController().create(request.body);
    }
  );

  fastify.zod.get(
    "/branch/:id",
    { params: "branch.get" },
    async (request, reply) => {
      const { id } = request.params;
      return await branchController().get(id);
    }
  );

  fastify.zod.get(
    "/branch",
    { querystring: "branch.list" },
    async (request, reply) => {
      return await branchController().list(request.query);
    }
  );

  fastify.zod.patch(
    "/branch/:id",
    { params: "branch.updateId", body: "branch.updateData" },
    async (request, reply) => {
      const { id } = request.params;
      return await branchController().update(id, request.body);
    }
  );

  fastify.zod.delete(
    "/branch/:id",
    { params: "branch.delete" },
    async (request, reply) => {
      const { id } = request.params;
      return await branchController().delete(id);
    }
  );

  done();
}
