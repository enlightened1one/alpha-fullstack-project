/*
  Warnings:

  - You are about to drop the column `role` on the `Teachers` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "teacherClass" AS ENUM ('PRIMARY', 'SECONDARY', 'TERTIARY', 'OTHER');

-- AlterTable
ALTER TABLE "Teachers" DROP COLUMN "role",
ADD COLUMN     "class" "teacherClass" NOT NULL DEFAULT 'OTHER';
