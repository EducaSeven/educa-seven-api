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

const getDashboard_1 = require("../services/dashboard/getDashboard.service");

exports.getPontuacaoDashboard = void 0;
exports.getPontuacaoDashboardById = void 0;
exports.getPontuacaoDashboardByUserId = void 0;

const getPontuacaoDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pontuacao = yield getDashboard_1.getPontuacaoDashboard();
        res.send(pontuacao);
    }
    catch (error) {
        console.log(error);
    }
});

const getPontuacaoDashboardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pontuacao = yield getDashboard_1.getPontuacaoDashboardById(req.id);
        res.send(pontuacao);
    }
    catch (error) {
        console.log(error);
    }
});

const getPontuacaoDashboardByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pontuacao = yield getDashboard_1.getPontuacaoDashboardByUserId(req.id);
        res.send(pontuacao);
    }
    catch (error) {
        console.log(error);
    }
});

exports.getPontuacaoDashboard = getPontuacaoDashboard;
exports.getPontuacaoDashboardById = getPontuacaoDashboardById;
exports.getPontuacaoDashboardByUserId = getPontuacaoDashboardByUserId;