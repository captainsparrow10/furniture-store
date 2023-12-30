-- CreateTable
CREATE TABLE "CartPrueba" (
    "id" SERIAL NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "image" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "CartPrueba_pkey" PRIMARY KEY ("id")
);
