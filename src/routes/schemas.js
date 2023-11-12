/** @format */

import scheduleSchemas from "./schedule/scheduleSchemas.js";
import clientSchemas from "./client/clientSchemas.js";
import branchSchemas from "./branch/branchSchemas.js";
import teamSchemas from "./team/teamSchemas.js";
import eventRoleSchemas from "./eventRole/eventRoleSchemas.js";

export default {
  ...branchSchemas,
  ...clientSchemas,
  ...scheduleSchemas,
  ...eventRoleSchemas,
  ...teamSchemas,
};
