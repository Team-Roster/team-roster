/** @format */

import { z } from "zod";

const createRequest = z.object({
  name: z.string(),
  team_id: z.number(),
});

const listRequest = z.object({
  name: z.string().optional(),
  team_id: z.number().optional(),
});

const listByTeamRequest = z.object({
  team_id: z.number(),
});

const deleteRequest = z.object({
  id: z.number(),
});

const updateIdRequest = z.object({
  id: z.number(),
});

const updateDataRequest = z.object({
  name: z.string(),
  team_id: z.number(),
});

const getRequest = z.object({
  id: z.number(),
});

export default {
  "event_role.create": createRequest,
  "event_role.list": listRequest,
  "event_role.list_by_team": listByTeamRequest,
  "event_role.delete": deleteRequest,
  "event_role.get": getRequest,
  "event_role.updateId": updateIdRequest,
  "event_role.updateData": updateDataRequest,
};
