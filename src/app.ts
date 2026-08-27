import express, { Request, Response } from "express";
import usersRouter from "./routes/users";

const app = express();
app.use(express.json());

// ルートパスへのアクセス用（動作確認用）
app.get("/", (req: Request, res: Response) => {
  res.send("API Server is running!");
});

app.use("/api/users", usersRouter);

export default app;
