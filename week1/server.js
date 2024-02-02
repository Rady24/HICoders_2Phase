import express from "express";
import teachersRouter from "./teachersRouter.js";
import studentsRouter from "./studentsRouter.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/api", teachersRouter);
app.use("/api", studentsRouter);

app.get("/", (req, res) => res.send("Welcome to the Home page"));

app.listen(port, () => console.log(`Server running on port ${port}`));
