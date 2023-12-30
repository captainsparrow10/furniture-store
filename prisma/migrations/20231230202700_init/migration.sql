/*
  Warnings:

  - A unique constraint covering the columns `[id_product]` on the table `CartPrueba` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CartPrueba" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "CartPrueba_id_product_key" ON "CartPrueba"("id_product");
