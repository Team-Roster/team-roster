/*
  Warnings:

  - A unique constraint covering the columns `[name,team_id]` on the table `event_roles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `event_roles_name_team_id_key` ON `event_roles`(`name`, `team_id`);
