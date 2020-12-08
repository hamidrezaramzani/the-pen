import express from "express";
import config from "config";
import morgan from "morgan";
import usersRouter from "./routes/users.js";
import bodyParser from "body-parser";
import "./database/connection.js";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", usersRouter);

app.listen(config.get("PORT"), () => {
  console.log(`SERVER RUNNING ON PORT ${config.get("PORT")}`);
});
