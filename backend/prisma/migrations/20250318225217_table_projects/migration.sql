/*
  Warnings:

  - You are about to drop the column `projectId` on the `technologies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "technologies" DROP CONSTRAINT "technologies_projectId_fkey";

-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "projectId";
