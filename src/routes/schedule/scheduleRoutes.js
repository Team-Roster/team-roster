/** @format */

import scheduleController from "#controllers/scheduleController.js";

export default function (fastify, opts, done) {
  fastify.zod.get(
    "/schedule/:id",
    { params: "schedule.get" },
    async (request, reply) => {
      const { id } = request.params;
      return await scheduleController().get(id);
    }
  );

  fastify.zod.post(
    "/schedule",
    { body: "schedule.create" },
    async (request, reply) => {
      return await scheduleController().create(request.body);
    }
  );

  fastify.zod.patch(
    "/schedule/:id",
    { params: "schedule.updateId", body: "schedule.updateData" },
    async (request, reply) => {
      const { id } = request.params;
      const { data } = request.params;
      return await scheduleController().update(id, data);
    }
  );

  fastify.zod.delete(
    "/schedule/:id",
    { params: "schedule.delete" },
    async (request, reply) => {
      const { id } = request.params;
      return await scheduleController().delete(id);
    }
  );

  fastify.zod.get(
    "/schedule/branch/:branch/team/:team",
    { params: "schedule.list" },
    async (request, reply) => {
      const { branch, team } = request.params;
      return await scheduleController().list(branch, team, request.query);
    }
  );

  done();
}
