"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizController_1 = require("../controllers/quizController");
const quizRouter = express_1.default.Router();
// Rota para obter todos os quizzes
quizRouter.get("/", quizController_1.getAllQuizzes);
// Rota para obter um quiz por ID
quizRouter.get("/:id", quizController_1.getOneQuizze);
exports.default = quizRouter;
