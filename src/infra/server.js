import Fastify from "fastify";
import fastifyListRoutes from "fastify-list-routes";
import registerRoutes from "#routes/index.js";

const fastify = Fastify({
  logger: true,
});

export const start = async () => {
  try {
    await fastify.register(fastifyListRoutes, { colors: true });
    await registerRoutes();
    await fastify.listen({ port: process.env.APP_PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

export default fastify;
