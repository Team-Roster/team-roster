import scheduleController from "#controllers/scheduleController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    return await scheduleController().get(request);
  });

  fastify.post("/", async (request, reply) => {
    return await scheduleController().create(request);
  });

  fastify.patch("/:id", async (request, reply) => {
    return await scheduleController().update(request);
  });

  fastify.delete("/:id", async (request, reply) => {
    return await scheduleController().delete(request);
  });

  done();
}
