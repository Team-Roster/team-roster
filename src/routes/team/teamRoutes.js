import teamController from "#controllers/teamController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    return await teamController().get(request);
  });

  fastify.post("/", async (request, reply) => {
    return await teamController().create(request);
  });

  fastify.patch("/:id", async (request, reply) => {
    return await teamController().update(request);
  });

  fastify.delete("/:id", async (request, reply) => {
    return await teamController().delete(request);
  });

  done();
}
