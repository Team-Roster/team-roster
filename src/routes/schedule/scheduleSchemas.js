import { z } from "zod";

const create = z.object({
  branch: z.number(),
  team: z.number(),
  start: z.date(),
  end: z.date(),
});

export default {
  create,
};
