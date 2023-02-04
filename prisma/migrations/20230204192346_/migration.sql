/*
  Warnings:

  - You are about to drop the `AnsweredQuestions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Answers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Attemps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoriesToQuiz` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "AnsweredQuestions" DROP CONSTRAINT "AnsweredQuestions_answerId_fkey";

-- DropForeignKey
ALTER TABLE "AnsweredQuestions" DROP CONSTRAINT "AnsweredQuestions_attempsId_fkey";

-- DropForeignKey
ALTER TABLE "AnsweredQuestions" DROP CONSTRAINT "AnsweredQuestions_questionId_fkey";

-- DropForeignKey
ALTER TABLE "AnsweredQuestions" DROP CONSTRAINT "AnsweredQuestions_quizId_fkey";

-- DropForeignKey
ALTER TABLE "AnsweredQuestions" DROP CONSTRAINT "AnsweredQuestions_userId_fkey";

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Attemps" DROP CONSTRAINT "Attemps_quizId_fkey";

-- DropForeignKey
ALTER TABLE "Attemps" DROP CONSTRAINT "Attemps_userId_fkey";

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_quizId_fkey";

-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToQuiz" DROP CONSTRAINT "_CategoriesToQuiz_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToQuiz" DROP CONSTRAINT "_CategoriesToQuiz_B_fkey";

-- DropTable
DROP TABLE "AnsweredQuestions";

-- DropTable
DROP TABLE "Answers";

-- DropTable
DROP TABLE "Attemps";

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "Questions";

-- DropTable
DROP TABLE "Quiz";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "_CategoriesToQuiz";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
