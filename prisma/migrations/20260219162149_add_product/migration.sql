/*
  Warnings:

  - Added the required column `key` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameEs" TEXT NOT NULL
);
INSERT INTO "new_Category" ("id", "nameEn", "nameEs") SELECT "id", "nameEn", "nameEs" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_key_key" ON "Category"("key");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
