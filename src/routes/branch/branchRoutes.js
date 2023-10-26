import branchController from "#controllers/branchController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    return await branchController().get(id);
  });

  fastify.post("/", async (request, reply) => {
    return await branchController().create({});
  });

  fastify.patch("/:id", async (request, reply) => {
    const { id } = request.params;
    return await branchController().update(id);
  });

  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    return await branchController().delete(id);
  });

  done();
}
