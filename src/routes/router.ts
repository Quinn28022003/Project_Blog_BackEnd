import express, { Router, Express, Request, Response, NextFunction } from 'express';
import controller from '../controller/controller';

class router {

    Routers: Router = express.Router();
    constructor() { };

    initRouter(app: Express) {
        const initController = new controller;
        this.Routers.get('/posts/detailPosts/:idPosts', initController.handleGetDetailPosts);
        this.Routers.get('/posts/blog', initController.handleGetBlog);
        this.Routers.get('/posts/project', initController.handleGetProject);
        this.Routers.get('/posts/recentBlog', initController.handleGetRecentBlog);
        this.Routers.get('/posts/topics/:idPosts', initController.handleGetTopicsPosts);

        this.Routers.use((req: Request, res: Response, next: NextFunction): void => {
            res.status(404).json({
                message: '404 Not Found!',
                errorCode: 1
            });
        });

        return app.use('/api', this.Routers);
    };
};

export default router;