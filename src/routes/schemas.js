/** @format */

import scheduleSchemas from "./schedule/scheduleSchemas.js";
import clientSchemas from "./client/clientSchemas.js";
import branchSchemas from "./branch/branchSchemas.js";

export default {
  ...scheduleSchemas,
  ...branchSchemas,
  ...clientSchemas,
};
