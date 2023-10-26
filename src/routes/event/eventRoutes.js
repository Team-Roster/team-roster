export default function (fastify, opts, done) {
  fastify.get("/:id", async (request, reply) => {
    return { hello: "user" };
  });

  fastify.post("/", async (request, reply) => {
    return { hello: "user" };
  });

  fastify.patch("/:id", async (request, reply) => {
    return { hello: "user" };
  });

  fastify.delete("/:id", async (request, reply) => {
    return { hello: "user" };
  });

  done();
}
