"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
class dbConnect {
    constructor() {
        this.connection = mysql2_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASSWORD,
            database: 'blog'
        });
    }
    ;
    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                throw err;
            }
            console.log('Connected to the database!');
        });
    }
    ;
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end((err) => {
                if (err) {
                    console.error('Error closing database connection:', err);
                    reject(err);
                }
                else {
                    console.log('Closed database connection!');
                    resolve();
                }
                ;
            });
        });
    }
    ;
    query(sql, params) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, function (err, result) {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
    ;
}
;
exports.default = dbConnect;
