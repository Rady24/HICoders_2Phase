import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import morgan from "morgan";
import sequelize from "./config/database.js";
import { startDatabase } from "./utils/start-database.js";
import routes from "./routes/server-routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT;

startDatabase(sequelize)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start the server:", err);
  });
