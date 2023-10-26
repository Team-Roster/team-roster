import branchController from "#controllers/branchController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    return await branchController().get(request);
  });

  fastify.post("/", async (request, reply) => {
    return await branchController().create(request);
  });

  fastify.patch("/:id", async (request, reply) => {
    return await branchController().update(request);
  });

  fastify.delete("/:id", async (request, reply) => {
    return await branchController().delete(request);
  });

  done();
}
