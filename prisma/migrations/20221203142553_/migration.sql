/*
  Warnings:

  - You are about to drop the column `photoId` on the `Panel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Panel" DROP CONSTRAINT "Panel_photoId_fkey";

-- AlterTable
ALTER TABLE "Panel" DROP COLUMN "photoId";

-- CreateTable
CREATE TABLE "_PanelToPhoto" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PanelToPhoto_AB_unique" ON "_PanelToPhoto"("A", "B");

-- CreateIndex
CREATE INDEX "_PanelToPhoto_B_index" ON "_PanelToPhoto"("B");

-- AddForeignKey
ALTER TABLE "_PanelToPhoto" ADD CONSTRAINT "_PanelToPhoto_A_fkey" FOREIGN KEY ("A") REFERENCES "Panel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PanelToPhoto" ADD CONSTRAINT "_PanelToPhoto_B_fkey" FOREIGN KEY ("B") REFERENCES "Photo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
