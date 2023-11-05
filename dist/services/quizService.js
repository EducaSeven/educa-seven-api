"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const clientDataBase_1 = require("../database/clientDataBase");
class QuizService {
    constructor() {
        this.database = clientDataBase_1.clientDataBase;
    }
    findAll() {
        try {
            return this.database.quiz.findMany({});
        }
        catch (error) {
            console.error("Erro ao buscar quizzes:", error);
            throw error;
        }
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    create(data) {
        throw new Error("Method not implemented.");
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.QuizService = QuizService;
