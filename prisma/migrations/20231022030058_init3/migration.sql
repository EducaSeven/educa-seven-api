/*
  Warnings:

  - You are about to drop the column `perguntaId` on the `Resposta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_perguntaId_fkey";

-- AlterTable
ALTER TABLE "Resposta" DROP COLUMN "perguntaId";
