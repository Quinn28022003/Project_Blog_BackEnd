import { Request, Response } from 'express';
import controllerServices from '../services/controllerServices';

class controller {

    constructor() { };

    async handleGetRecentBlog(req: Request, res: Response): Promise<void> {
        try {
            const initControllerServices = new controllerServices();
            const data: any = await initControllerServices.handleGetRecentBlogServices();
            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'success!',
                    errorCode: 0
                });
            } else {
                res.status(200).json({
                    message: 'failed!',
                    errorCode: 1
                });
            };
        } catch (error) {
            console.log('Error in class => controller method => handleGetRecentBlog: ', error);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        };
    };

    async handleGetBlog(req: Request, res: Response): Promise<void> {
        try {
            const initControllerServices = new controllerServices();
            const data: any = await initControllerServices.handleGetBlogServices();
            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'success!',
                    errorCode: 0
                });
            } else {
                res.status(200).json({
                    message: 'failed!',
                    errorCode: 1
                });
            };
        } catch (error) {
            console.log('Error in class => controller method => handleGetBlog: ', error);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        };
    };

    async handleGetProject(req: Request, res: Response): Promise<void> {
        try {
            const initControllerServices = new controllerServices();
            const data: any = await initControllerServices.handleGetProjectServices();
            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'success!',
                    errorCode: 0
                });
            } else {
                res.status(200).json({
                    message: 'failed!',
                    errorCode: 1
                });
            };
        } catch (error) {
            console.log('Error in class => controller method => handleGetProject: ', error);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        };
    };

    async handleGetTopicsPosts(req: Request, res: Response): Promise<void> {
        try {
            const idPosts: number = Number(req.params.idPosts);
            const initControllerServices = new controllerServices();
            const data: any = await initControllerServices.handleGetTopicsPostsServices(idPosts);
            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'success!',
                    errorCode: 0
                });
            } else {
                res.status(200).json({
                    message: 'failed!',
                    errorCode: 1
                });
            };
        } catch (error) {
            console.log('Error in class => controller method => handleGetTopicsPosts: ', error);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        };
    };
};

export default controller;