-- CreateTable
CREATE TABLE "NavItem" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "test" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "NavItem_pkey" PRIMARY KEY ("id")
);
