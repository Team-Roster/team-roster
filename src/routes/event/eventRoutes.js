import eventController from "#controllers/eventController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    return await eventController().get(request);
  });

  fastify.post("/", async (request, reply) => {
    return await eventController().create(request);
  });

  fastify.patch("/:id", async (request, reply) => {
    return await eventController().update(request);
  });

  fastify.delete("/:id", async (request, reply) => {
    return await eventController().delete(request);
  });

  done();
}
