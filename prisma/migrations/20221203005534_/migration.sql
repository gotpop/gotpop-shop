/*
  Warnings:

  - You are about to drop the column `brand` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `photoId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CartItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NavItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[urlName]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `basePrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_photoId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brand",
DROP COLUMN "photoId",
DROP COLUMN "price",
DROP COLUMN "updatedAt",
ADD COLUMN     "basePrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "urlName" TEXT NOT NULL,
ALTER COLUMN "stock" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" DROP NOT NULL;

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "CartItem";

-- DropTable
DROP TABLE "NavItem";

-- DropTable
DROP TABLE "Photo";

-- CreateTable
CREATE TABLE "UserTokens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "browserInfo" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserTokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "productId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 1,
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "reviewNote" INTEGER,
    "reviewComment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTokens_family_key" ON "UserTokens"("family");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Product_urlName_key" ON "Product"("urlName");

-- AddForeignKey
ALTER TABLE "UserTokens" ADD CONSTRAINT "UserTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
