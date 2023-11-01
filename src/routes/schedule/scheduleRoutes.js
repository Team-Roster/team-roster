import scheduleController from "#controllers/scheduleController.js";
import createSchema from "./scheduleSchemas.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    return await scheduleController().get(id);
  });

  fastify.zod.post("/schedule", { body: "create" }, async (request, reply) => {
    return await scheduleController().create(request.body);
  });

  fastify.patch("/:id", async (request, reply) => {
    const { id } = request.params;
    return await scheduleController().update(id);
  });

  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    return await scheduleController().delete(id);
  });

  done();
}
