/*
  Warnings:

  - Added the required column `cartActiveID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_loggedIn_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cartActiveID" TEXT NOT NULL;
