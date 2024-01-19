"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnect_1 = __importDefault(require("./dbconnect"));
class getBlog {
    constructor() { }
    ;
    getBlog() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initDbConnect = new dbconnect_1.default();
                const data = yield initDbConnect.query('SELECT *, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate FROM posts WHERE isProject = 0');
                return data;
            }
            catch (error) {
                console.log('Error in class => getBlog method => getBlog: ', error);
                throw new Error(String(error));
            }
            ;
        });
    }
    ;
}
;
exports.default = getBlog;
