/*
  Warnings:

  - Made the column `createdAt` on table `Teachers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Teachers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Teachers" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
