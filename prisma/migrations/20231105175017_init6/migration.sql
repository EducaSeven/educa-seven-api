-- DropForeignKey
ALTER TABLE "Pergunta" DROP CONSTRAINT "Pergunta_quizId_fkey";

-- AlterTable
ALTER TABLE "Pergunta_Respota" ADD COLUMN     "quizId" TEXT;

-- AddForeignKey
ALTER TABLE "Pergunta_Respota" ADD CONSTRAINT "Pergunta_Respota_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
