/*
  Warnings:

  - The primary key for the `Panel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PanelLink` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Panel" DROP CONSTRAINT "Panel_panelLinkId_fkey";

-- AlterTable
ALTER TABLE "Panel" DROP CONSTRAINT "Panel_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "panelLinkId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Panel_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Panel_id_seq";

-- AlterTable
ALTER TABLE "PanelLink" DROP CONSTRAINT "PanelLink_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PanelLink_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "PanelLink_id_seq";

-- AddForeignKey
ALTER TABLE "Panel" ADD CONSTRAINT "Panel_panelLinkId_fkey" FOREIGN KEY ("panelLinkId") REFERENCES "PanelLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
