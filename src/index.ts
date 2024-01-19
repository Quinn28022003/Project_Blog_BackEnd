import express, { Express } from "express";
import dotenv from "dotenv";
import viewEngine from "./configs/viewEngine";
import router from "./routes/router";
import dbconnect from "./database/dbconnect";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const initViewEngine = new viewEngine(app);
const initDbconnect = new dbconnect();
const Router = new router();

initDbconnect.connect();
Router.initRouter(app);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});