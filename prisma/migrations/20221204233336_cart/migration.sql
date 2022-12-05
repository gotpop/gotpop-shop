/*
  Warnings:

  - A unique constraint covering the columns `[isActive]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cart_isActive_key" ON "Cart"("isActive");
