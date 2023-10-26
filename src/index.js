import fastify from "#infra/server.js";
import fastifyListRoutes from "fastify-list-routes";
import registerRoutes from "#routes/index.js";

const start = async () => {
  try {
    await fastify.register(fastifyListRoutes, { colors: true });
    await registerRoutes();
    await fastify.listen({ port: 9000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
