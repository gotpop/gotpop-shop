-- AlterTable
ALTER TABLE "Panel" ADD COLUMN     "photoId" TEXT;

-- AddForeignKey
ALTER TABLE "Panel" ADD CONSTRAINT "Panel_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
