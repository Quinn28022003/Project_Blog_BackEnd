"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class viewEngine {
    constructor(app) {
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.use(express_1.default.static('./src/public/assets'));
        app.use((0, cors_1.default)());
        app.set('view engine', 'hbs');
        app.set('views', './src/views');
    }
    ;
}
;
exports.default = viewEngine;
