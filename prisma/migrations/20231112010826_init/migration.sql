-- CreateTable
CREATE TABLE `EventRoles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `team_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventRoles` ADD CONSTRAINT `EventRoles_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `Teams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
