/*
  Warnings:

  - You are about to drop the `EventRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `EventRoles` DROP FOREIGN KEY `EventRoles_team_id_fkey`;

-- DropTable
DROP TABLE `EventRoles`;

-- CreateTable
CREATE TABLE `Event_Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `team_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event_Roles` ADD CONSTRAINT `Event_Roles_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `Teams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
