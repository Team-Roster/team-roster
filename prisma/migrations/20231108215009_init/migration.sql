/*
  Warnings:

  - You are about to drop the column `team` on the `Schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Schedules` DROP COLUMN `team`,
    ADD COLUMN `branch` JSON NULL,
    ADD COLUMN `schedule` JSON NULL;
