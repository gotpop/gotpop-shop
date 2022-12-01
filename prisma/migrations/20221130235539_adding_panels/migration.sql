-- CreateTable
CREATE TABLE "PanelLink" (
    "id" SERIAL NOT NULL,
    "href" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "PanelLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Panel" (
    "id" SERIAL NOT NULL,
    "direction" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "panelLinkId" INTEGER NOT NULL,

    CONSTRAINT "Panel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Panel" ADD CONSTRAINT "Panel_panelLinkId_fkey" FOREIGN KEY ("panelLinkId") REFERENCES "PanelLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
