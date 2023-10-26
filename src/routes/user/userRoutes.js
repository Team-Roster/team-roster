import userController from "#controllers/userController.js";

export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    return await userController().get(request);
  });

  fastify.post("/", async (request, reply) => {
    return await userController().create(request);
  });

  fastify.patch("/:id", async (request, reply) => {
    return await userController().update(request);
  });

  fastify.delete("/:id", async (request, reply) => {
    return await userController().delete(request);
  });

  done();
}
