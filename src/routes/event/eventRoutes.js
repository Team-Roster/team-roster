/** @format */

import eventController from "#controllers/eventController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    return await eventController().get(id);
  });

  fastify.post("/", async (request, reply) => {
    return await eventController().create({});
  });

  fastify.patch("/:id", async (request, reply) => {
    const { id } = request.params;
    return await eventController().update(id);
  });

  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    return await eventController().delete(id);
  });

  done();
}
