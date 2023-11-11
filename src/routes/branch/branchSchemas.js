/** @format */

import { z } from "zod";

const createRequest = z.object({
  name: z.string(),
  document: z.string(),
  client_id: z.number(),
});

const listRequest = z.object({
  name: z.string().optional(),
  document: z.string().optional(),
  client_id: z.number().optional(),
});

const deleteRequest = z.object({
  id: z.number(),
});

const updateIdRequest = z.object({
  id: z.number(),
});

const updateDataRequest = z.object({
  name: z.string().optional(),
  document: z.string().optional(),
});

const getRequest = z.object({
  id: z.number(),
});

export default {
  "branch.create": createRequest,
  "branch.list": listRequest,
  "branch.delete": deleteRequest,
  "branch.get": getRequest,
  "branch.updateId": updateIdRequest,
  "branch.updateData": updateDataRequest,
};
