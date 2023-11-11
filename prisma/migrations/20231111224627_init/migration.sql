/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `Branches` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[document,client_id]` on the table `Branches` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `document` to the `Branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Branches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Branches` ADD COLUMN `document` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Branches_document_key` ON `Branches`(`document`);

-- CreateIndex
CREATE UNIQUE INDEX `Branches_document_client_id_key` ON `Branches`(`document`, `client_id`);
