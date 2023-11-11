/*
  Warnings:

  - You are about to drop the `UsersBranch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `UsersBranch` DROP FOREIGN KEY `UsersBranch_branch_id_fkey`;

-- DropForeignKey
ALTER TABLE `UsersBranch` DROP FOREIGN KEY `UsersBranch_user_id_fkey`;

-- DropTable
DROP TABLE `UsersBranch`;

-- CreateTable
CREATE TABLE `UsersBranches` (
    `user_id` INTEGER NOT NULL,
    `branch_id` INTEGER NOT NULL,
    `assigned_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assigned_by` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`user_id`, `branch_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsersBranches` ADD CONSTRAINT `UsersBranches_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersBranches` ADD CONSTRAINT `UsersBranches_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
