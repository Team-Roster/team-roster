import Fastify from "fastify";
import fastifyListRoutes from "fastify-list-routes";
import { buildJsonSchemas, register } from "fastify-zod";
import registerRoutes from "#routes/index.js";
import schemas from "#routes/schemas.js";
import { env } from 'node:process';


const fastify = Fastify({
  // logger: true,
});

await register(fastify, {
  jsonSchemas: buildJsonSchemas(schemas),
  swaggerOptions: {
    // See https://github.com/fastify/fastify-swagger
  },
  swaggerUiOptions: {
    // See https://github.com/fastify/fastify-swagger-ui
  },
  transformSpec: {}, // optional, see below
});

export const start = async () => {
  try {
    if (process.env.APP_ENV === "local") {
      await fastify.register(fastifyListRoutes, { colors: true });
    }
    
    await registerRoutes(fastify);
    
    await fastify.listen({ port: process.env.APP_PORT | 9000 });
  } catch (err) {
    console.log(err);
    fastify.log.error(err);
    process.exit(1);
  }
};

export default fastify;
