/*
  Warnings:

  - You are about to drop the `AvatarImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceHours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TempUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_storeId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceHours" DROP CONSTRAINT "ServiceHours_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_avatarImageId_fkey";

-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_serviceTypesId_fkey";

-- DropTable
DROP TABLE "AvatarImage";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "ServiceHours";

-- DropTable
DROP TABLE "ServiceTypes";

-- DropTable
DROP TABLE "Store";

-- DropTable
DROP TABLE "TempUser";

-- DropEnum
DROP TYPE "Days";

-- DropEnum
DROP TYPE "DineTypes";

-- DropEnum
DROP TYPE "Role";
