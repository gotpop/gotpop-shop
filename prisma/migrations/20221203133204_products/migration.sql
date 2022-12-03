-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PhotoToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PhotoToProduct_AB_unique" ON "_PhotoToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotoToProduct_B_index" ON "_PhotoToProduct"("B");

-- AddForeignKey
ALTER TABLE "_PhotoToProduct" ADD CONSTRAINT "_PhotoToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Photo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoToProduct" ADD CONSTRAINT "_PhotoToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
