/** @format */

import eventRoleController from "#controllers/eventRoleController.js";

export default function (fastify, opts, done) {
  fastify.zod.post(
    "/event_role",
    { body: "event_role.create" },
    async (request, reply) => {
      return await eventRoleController().create(request.body);
    }
  );

  fastify.zod.get(
    "/event_role/:id",
    { params: "event_role.get" },
    async (request, reply) => {
      const { id } = request.params;
      return await eventRoleController().get(id);
    }
  );

  fastify.zod.get(
    "/event_role",
    { querystring: "event_role.list" },
    async (request, reply) => {
      return await eventRoleController().list(request.query);
    }
  );

  fastify.zod.get(
    "/event_role/team/:team_id",
    { params: "event_role.list_by_team" },
    async (request, reply) => {
      const { team_id } = request.params;
      return await eventRoleController().listByTeam(team_id);
    }
  );

  fastify.zod.patch(
    "/event_role/:id",
    { params: "event_role.updateId", body: "event_role.updateData" },
    async (request, reply) => {
      const { id } = request.params;
      return await eventRoleController().update(id, request.body);
    }
  );

  fastify.zod.delete(
    "/event_role/:id",
    { params: "event_role.delete" },
    async (request, reply) => {
      const { id } = request.params;
      return await eventRoleController().delete(id);
    }
  );

  done();
}
