import roleController from "#controllers/roleController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    return await roleController().get(id);
  });

  fastify.post("/", async (request, reply) => {
    return await roleController().create({});
  });

  fastify.patch("/:id", async (request, reply) => {
    const { id } = request.params;
    return await roleController().update(id);
  });

  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    return await roleController().delete(id);
  });

  done();
}
