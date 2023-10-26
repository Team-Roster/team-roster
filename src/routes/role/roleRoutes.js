import roleController from "#controllers/roleController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    return await roleController().get(request);
  });

  fastify.post("/", async (request, reply) => {
    return await roleController().create(request);
  });

  fastify.patch("/:id", async (request, reply) => {
    return await roleController().update(request);
  });

  fastify.delete("/:id", async (request, reply) => {
    return await roleController().delete(request);
  });

  done();
}
