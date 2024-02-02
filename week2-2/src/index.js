import express from "express";
import usersRouter from "./controller/usersRouter.js";
import homeRouter from "./controller/homeRouter.js";

const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/home", homeRouter);

export default app;
