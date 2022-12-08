/*
  Warnings:

  - You are about to drop the column `amount` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `reviewComment` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `reviewNote` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `CartItem` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CartItem_name_key";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "amount",
DROP COLUMN "name",
DROP COLUMN "reviewComment",
DROP COLUMN "reviewNote",
DROP COLUMN "totalPrice",
ADD COLUMN     "quantity" INTEGER NOT NULL;
