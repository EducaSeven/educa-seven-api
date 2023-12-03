"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizRouter_1 = __importDefault(require("./routes/quizRouter"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const perguntaRouter_1 = __importDefault(require("./routes/perguntaRouter"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use('/quizzes', quizRouter_1.default);
app.use('/user', userRoute_1.default);
app.use('/pergunta', perguntaRouter_1.default);
app.use('/pontuacao', perguntaRouter_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
