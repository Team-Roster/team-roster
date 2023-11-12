/** @format */

import { z } from "zod";

const createRequest = z.object({
  name: z.string(),
  branch_id: z.number(),
});

const listRequest = z.object({
  name: z.string().optional(),
  branch_id: z.number().optional(),
});

const deleteRequest = z.object({
  id: z.number(),
});

const updateIdRequest = z.object({
  id: z.number(),
});

const updateDataRequest = z.object({
  name: z.string(),
  branch_id: z.number(),
});

const getRequest = z.object({
  id: z.number(),
});

export default {
  "team.create": createRequest,
  "team.list": listRequest,
  "team.delete": deleteRequest,
  "team.get": getRequest,
  "team.updateId": updateIdRequest,
  "team.updateData": updateDataRequest,
};
