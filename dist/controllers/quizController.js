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
exports.deleteQuiz = exports.createQuiz = exports.getOneQuizze = exports.getAllQuizzes = void 0;
const findAll_quizzes_service_1 = require("../services/quiz/findAll-quizzes.service");
const findOne_quiz_service_1 = require("../services/quiz/findOne-quiz.service");
const createQuiz_service_1 = require("../services/quiz/createQuiz.service");
const deleteQuiz_service_1 = require("../services/quiz/deleteQuiz.service");
const getAllQuizzes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizzes = yield (0, findAll_quizzes_service_1.findAllQuizzesService)();
        return res.json(quizzes);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllQuizzes = getAllQuizzes;
const getOneQuizze = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idQuiz = req.params.id;
        const quiz = yield (0, findOne_quiz_service_1.findOneQuizService)(idQuiz);
        return res.json(quiz);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOneQuizze = getOneQuizze;
const createQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const quiz = yield (0, createQuiz_service_1.createQuizService)(data);
        return res.status(201).json(quiz);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createQuiz = createQuiz;
const deleteQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idQuiz = req.params.id;
        yield (0, deleteQuiz_service_1.deleteQuizService)(idQuiz);
        return res.status(204).json();
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteQuiz = deleteQuiz;
