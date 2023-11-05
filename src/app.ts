import express from "express";
import routes from "./routes/quizRouter";
import quizRouter from "./routes/quizRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/quizzes", quizRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
