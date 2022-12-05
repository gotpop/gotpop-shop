/*
  Warnings:

  - You are about to drop the column `reviewComment` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `reviewNote` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `CartItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "reviewComment",
DROP COLUMN "reviewNote",
DROP COLUMN "totalPrice";
