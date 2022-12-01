/*
  Warnings:

  - You are about to drop the column `photoId` on the `User` table. All the data in the column will be lost.
  - Added the required column `alt` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_photoId_fkey";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "alt" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "photoId";
