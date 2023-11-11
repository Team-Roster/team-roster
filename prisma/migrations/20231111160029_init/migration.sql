/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `Clients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `document` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Clients_name_key` ON `Clients`;

-- AlterTable
ALTER TABLE `Clients` ADD COLUMN `document` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Clients_document_key` ON `Clients`(`document`);
