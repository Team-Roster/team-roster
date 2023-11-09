/*
  Warnings:

  - The `branch` column on the `Schedules` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[branch,team,name,when,time]` on the table `Schedules` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Schedules` ADD COLUMN `team` INTEGER NOT NULL DEFAULT 0,
    DROP COLUMN `branch`,
    ADD COLUMN `branch` INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `Schedules_branch_team_name_when_time_key` ON `Schedules`(`branch`, `team`, `name`, `when`, `time`);
