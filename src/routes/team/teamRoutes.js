import teamController from "#controllers/teamController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    return await teamController().get(id);
  });

  fastify.post("/", async (request, reply) => {
    return await teamController().create({});
  });

  fastify.patch("/:id", async (request, reply) => {
    const { id } = request.params;
    return await teamController().update(id);
  });

  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    return await teamController().delete(id);
  });

  done();
}
