import userController from "#controllers/userController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    return await userController().get(id);
  });

  fastify.post("/", async (request, reply) => {
    return await userController().create({});
  });

  fastify.patch("/:id", async (request, reply) => {
    const { id } = request.params;
    return await userController().update(id);
  });

  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    return await userController().delete(id);
  });

  done();
}
