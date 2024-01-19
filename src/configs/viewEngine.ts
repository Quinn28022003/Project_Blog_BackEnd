import express, { Express } from 'express';
import cors from 'cors';

class viewEngine {
    constructor(app: Express) {
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(express.static('./src/public/assets'));
        app.use(cors())

        app.set('view engine', 'hbs');
        app.set('views', './src/views');
    };
};

export default viewEngine;