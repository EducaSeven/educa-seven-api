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
exports.updatePergunta = exports.deletePergunta = exports.getOnePergunta = exports.getAllPerguntasWithIdQuiz = exports.getAllPerguntas = exports.postPergunta = void 0;
const createPergunta_service_1 = require("../services/pergunta/createPergunta.service");
const findAllPergunta_service_1 = require("../services/pergunta/findAllPergunta.service");
const findOneQuestion_service_1 = require("../services/pergunta/findOneQuestion.service");
const deletePergunta_service_1 = require("../services/pergunta/deletePergunta.service");
const upersetPergunta_service_1 = require("../services/pergunta/upersetPergunta.service");
const findAllPerguntasWithQuizId_service_1 = require("../services/pergunta/findAllPerguntasWithQuizId.service");
const postPergunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('postPergunta,  body:', req.body);
        const data = req.body;
        const resp = yield (0, createPergunta_service_1.createPergunta)(data);
        return res.status(200).json(resp);
    }
    catch (error) {
        console.log(error);
    }
});
exports.postPergunta = postPergunta;
const getAllPerguntas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getAllPerguntas, no body e noparams:');
        const resp = yield (0, findAllPergunta_service_1.findAllPerguntas)();
        return res.status(200).json(resp);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllPerguntas = getAllPerguntas;
const getAllPerguntasWithIdQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getAllPerguntasWithIdQuiz, params.id:');
        const idquiz = req.params.quizId;
        const resp = yield (0, findAllPerguntasWithQuizId_service_1.findAllPerguntasWithQuizId)(idquiz);
        return res.status(200).json(resp);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllPerguntasWithIdQuiz = getAllPerguntasWithIdQuiz;
const getOnePergunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('GetOnePergunta, params.id:', req.params.id);
        const resp = yield (0, findOneQuestion_service_1.findOnePergunta)(req.params.id);
        return res.status(200).json(resp);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOnePergunta = getOnePergunta;
const deletePergunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('deletePergunta, params.id:', req.params.id);
        const resp = yield (0, deletePergunta_service_1.deleteOnePergunta)(req.params.id);
        return res.status(200).json(resp);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deletePergunta = deletePergunta;
const updatePergunta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('updatePergunta,  body:', req.body);
        const data = req.body;
        const resp = yield (0, upersetPergunta_service_1.upersetPergunta)(data);
        return res.status(200).json(resp);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updatePergunta = updatePergunta;
