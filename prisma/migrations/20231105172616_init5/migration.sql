/*
  Warnings:

  - You are about to drop the column `certa` on the `Resposta` table. All the data in the column will be lost.
  - You are about to drop the column `perguntaId` on the `Resposta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_perguntaId_fkey";

-- AlterTable
ALTER TABLE "Resposta" DROP COLUMN "certa",
DROP COLUMN "perguntaId";

-- CreateTable
CREATE TABLE "Pergunta_Respota" (
    "id" TEXT NOT NULL,
    "resultado" BOOLEAN NOT NULL,
    "perguntaId" TEXT NOT NULL,
    "respostaId" TEXT NOT NULL,

    CONSTRAINT "Pergunta_Respota_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pergunta_Respota" ADD CONSTRAINT "Pergunta_Respota_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "Pergunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta_Respota" ADD CONSTRAINT "Pergunta_Respota_respostaId_fkey" FOREIGN KEY ("respostaId") REFERENCES "Resposta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
