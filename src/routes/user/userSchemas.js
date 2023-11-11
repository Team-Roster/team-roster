/** @format */

import { z } from "zod";

const createRequest = z.object({
  name: z.string(),
  roles: z.array().optional(),
  branch_id: z.number(),
  team_id: z.number(),
  max_sequential: z.number().optional(),
  exclude_me_on_days_that_are: z.array().optional(),
});

const listRequest = z.object({
  branch: z.number(),
  team: z.number(),
});

const deleteRequest = z.object({
  id: z.number(),
});

const updateIdRequest = z.object({
  id: z.number(),
});

const updateDataRequest = z.object({});

const getRequest = z.object({
  id: z.number(),
});

export default {
  "user.create": createRequest,
  "user.list": listRequest,
  "user.delete": deleteRequest,
  "user.get": getRequest,
  "user.updateId": updateIdRequest,
  "user.updateData": updateDataRequest,
};
