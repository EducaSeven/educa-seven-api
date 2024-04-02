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
exports.postPontuacao = exports.getAllPontuacao = void 0;
const findAllPontuacao_service_1 = require("../services/pontuacao/findAllPontuacao.service");
const createPontuacao_service_1 = require("../services/pontuacao/createPontuacao.service");
const getAllPontuacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getAllPontuacao,  params.id:', req.params.id);
        const resp = yield (0, findAllPontuacao_service_1.findAllPontuacao)(req.params.id);
        return res.status(200).json({ resp });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllPontuacao = getAllPontuacao;
const postPontuacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('postPontuacao,  req.body:', req.body);
        const { usuarioId, pontuacao, quizId } = req.body;
        const resp = yield (0, createPontuacao_service_1.createPontuacao)(usuarioId, pontuacao, quizId);
        return res.status(200).json({ resp });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postPontuacao = postPontuacao;
