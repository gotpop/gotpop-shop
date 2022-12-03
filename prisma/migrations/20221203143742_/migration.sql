/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Panel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Panel_title_key" ON "Panel"("title");
