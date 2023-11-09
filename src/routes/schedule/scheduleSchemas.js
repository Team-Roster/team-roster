/** @format */

import { z } from "zod";

const create = z.object({
  branch: z.number(),
  team: z.number(),
  start: z.date(),
  end: z.date(),
});

const list = z.object({
  branch: z.number(),
  team: z.number(),
});

export default {
  "schedule.create": create,
  "schedule.list": list,
};
