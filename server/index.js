import express from 'express';
import config from 'config';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import usersRouter from './routes/users';
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/", usersRouter);

app.listen(config.get("PORT"), () => {
    console.log(`SERVER RUNNING ON PORT ${config.get("PORT")}`);
});