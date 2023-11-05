/*
  Warnings:

  - Made the column `quizId` on table `Pergunta_Respota` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Pergunta_Respota" DROP CONSTRAINT "Pergunta_Respota_quizId_fkey";

-- AlterTable
ALTER TABLE "Pergunta_Respota" ALTER COLUMN "quizId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Pergunta_Respota" ADD CONSTRAINT "Pergunta_Respota_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
