/*
  Warnings:

  - Added the required column `branch_id` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_id` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `branch_id` INTEGER NOT NULL,
    ADD COLUMN `exclude_me_on_days_that_are` JSON NULL,
    ADD COLUMN `max_sequential` INTEGER NULL DEFAULT 1,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `roles` JSON NULL,
    ADD COLUMN `team_id` INTEGER NOT NULL;
