/*
  Warnings:

  - A unique constraint covering the columns `[loggedIn]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_loggedIn_key" ON "User"("loggedIn");
