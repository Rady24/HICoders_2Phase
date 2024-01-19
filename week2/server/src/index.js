import express from "express";
import cors from "cors";
import postsRouter from "./controller/postsPouter.js";
import usersRouter from "./controller/usersRouter.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

export default app;
