/*
  Warnings:

  - You are about to drop the `Pergunta_Respota` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `certa` to the `Resposta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pergunta_Respota" DROP CONSTRAINT "Pergunta_Respota_perguntaId_fkey";

-- DropForeignKey
ALTER TABLE "Pergunta_Respota" DROP CONSTRAINT "Pergunta_Respota_respostaId_fkey";

-- AlterTable
ALTER TABLE "Resposta" ADD COLUMN     "certa" BOOLEAN NOT NULL,
ADD COLUMN     "perguntaId" TEXT;

-- DropTable
DROP TABLE "Pergunta_Respota";

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "Pergunta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
