/*
  Warnings:

  - You are about to drop the column `quizId` on the `Pergunta_Respota` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Pergunta_Respota` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Pergunta_Respota" DROP CONSTRAINT "Pergunta_Respota_quizId_fkey";

-- AlterTable
ALTER TABLE "Pergunta_Respota" DROP COLUMN "quizId";

-- CreateIndex
CREATE UNIQUE INDEX "Pergunta_Respota_id_key" ON "Pergunta_Respota"("id");

-- AddForeignKey
ALTER TABLE "Pergunta" ADD CONSTRAINT "Pergunta_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
