/*
  Warnings:

  - You are about to drop the column `branch_id` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `team_id` on the `Users` table. All the data in the column will be lost.
  - Added the required column `branch_id` to the `Teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Teams` ADD COLUMN `branch_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `branch_id`,
    DROP COLUMN `team_id`;

-- CreateTable
CREATE TABLE `Clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `client_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersBranch` (
    `user_id` INTEGER NOT NULL,
    `branch_id` INTEGER NOT NULL,
    `assigned_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assigned_by` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`user_id`, `branch_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Teams` ADD CONSTRAINT `Teams_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branches` ADD CONSTRAINT `Branches_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersBranch` ADD CONSTRAINT `UsersBranch_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersBranch` ADD CONSTRAINT `UsersBranch_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
