/*
  Warnings:

  - The primary key for the `Panel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `panelLinkId` on the `Panel` table. All the data in the column will be lost.
  - The `id` column on the `Panel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `PanelLink` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `linkhref` to the `Panel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linktext` to the `Panel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Panel" DROP CONSTRAINT "Panel_panelLinkId_fkey";

-- AlterTable
ALTER TABLE "Panel" DROP CONSTRAINT "Panel_pkey",
DROP COLUMN "panelLinkId",
ADD COLUMN     "linkhref" TEXT NOT NULL,
ADD COLUMN     "linktext" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Panel_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "PanelLink";
