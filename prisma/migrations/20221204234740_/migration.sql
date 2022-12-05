-- DropIndex
DROP INDEX "Cart_isActive_key";

-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "isActive" SET DEFAULT false;
