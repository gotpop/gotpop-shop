/*
  Warnings:

  - You are about to drop the column `picture` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `basePrice` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "picture",
ALTER COLUMN "basePrice" SET DATA TYPE DOUBLE PRECISION;
