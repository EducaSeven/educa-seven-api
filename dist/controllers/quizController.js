"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneQuizze = exports.getAllQuizzes = void 0;
const quizService_1 = require("../services/quizService");
const client = new quizService_1.QuizService();
const getAllQuizzes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizzes = yield client.findAll();
        return res.json(quizzes);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllQuizzes = getAllQuizzes;
const getOneQuizze = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idQuiz = req.body.id;
        const quiz = yield client.findOne(idQuiz);
        return res.json(quiz);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOneQuizze = getOneQuizze;
