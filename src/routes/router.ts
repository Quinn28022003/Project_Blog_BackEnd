import express, { Router, Express } from 'express';
import controller from '../controller/controller';

class router {

    Routers: Router = express.Router();
    constructor() { };

    initRouter(app: Express) {
        const initController = new controller;
        this.Routers.get('/posts/blog', initController.handleGetBlog);
        this.Routers.get('/posts/project', initController.handleGetProject);
        this.Routers.get('/posts/recentBlog', initController.handleGetRecentBlog);
        this.Routers.get('/posts/topics/:idPosts', initController.handleGetTopicsPosts);

        return app.use('/api', this.Routers);
    };
};

export default router;