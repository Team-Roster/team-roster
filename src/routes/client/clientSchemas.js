/** @format */

import { z } from "zod";

const createRequest = z.object({
  name: z.string(),
  document: z.string(),
});

const listRequest = z.object({
  name: z.string().optional(),
  document: z.string().optional(),
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
  "client.create": createRequest,
  "client.list": listRequest,
  "client.delete": deleteRequest,
  "client.get": getRequest,
  "client.updateId": updateIdRequest,
  "client.updateData": updateDataRequest,
};
