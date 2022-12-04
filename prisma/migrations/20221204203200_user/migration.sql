-- DropIndex
DROP INDEX "Cart_isActive_key";

-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "userId" DROP NOT NULL;
