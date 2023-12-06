/*
  Warnings:

  - Made the column `accuracy` on table `Step` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `Step` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `Step` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Step" ALTER COLUMN "accuracy" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL;
