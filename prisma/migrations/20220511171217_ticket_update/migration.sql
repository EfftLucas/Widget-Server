/*
  Warnings:

  - Added the required column `company` to the `ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ticket" ADD COLUMN     "company" TEXT NOT NULL;
