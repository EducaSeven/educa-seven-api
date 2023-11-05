/*
  Warnings:

  - You are about to drop the column `respota_certa` on the `Resposta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resposta" DROP COLUMN "respota_certa";

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
