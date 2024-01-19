"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const viewEngine_1 = __importDefault(require("./configs/viewEngine"));
const router_1 = __importDefault(require("./routes/router"));
const dbconnect_1 = __importDefault(require("./database/dbconnect"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const initViewEngine = new viewEngine_1.default(app);
const initDbconnect = new dbconnect_1.default();
const Router = new router_1.default();
initDbconnect.connect();
Router.initRouter(app);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
