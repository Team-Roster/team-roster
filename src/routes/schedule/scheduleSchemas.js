/** @format */

import { z } from "zod";

const createRequest = z.object({
  branch: z.number(),
  team: z.number(),
  start: z.date(),
  end: z.date(),
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

const updateDataRequest = z.object({
  branch: z.number(),
  team: z.number(),
  start: z.date(),
  end: z.date(),
});

const getRequest = z.object({
  id: z.number(),
});

export default {
  "schedule.create": createRequest,
  "schedule.list": listRequest,
  "schedule.delete": deleteRequest,
  "schedule.get": getRequest,
  "schedule.updateId": updateIdRequest,
  "schedule.updateData": updateDataRequest,
};
