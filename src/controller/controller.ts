import { Request, Response } from 'express';
import controllerServices from '../services/controllerServices';
import { ConvertImage } from '../utils/convertImage';

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
            const { page, postsPerPage } = req.query;
            if (!page || !postsPerPage) {
                res.status(200).json({
                    message: 'failed!',
                    errorCode: 1
                });
            } else {
                const initControllerServices = new controllerServices();
                const data: any = await initControllerServices.handleGetBlogServices(Number(page), Number(postsPerPage));
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

    async handleGetDetailPosts(req: Request, res: Response): Promise<void> {
        try {
            const idPosts: number = Number(req.params.idPosts);
            const initControllerServices = new controllerServices();
            const data: any = await initControllerServices.handleGetDetailPostsServices(idPosts);
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
            console.log('Error in class => controller method => handleGetDetailPosts: ', error);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        };
    };

    async handleTestConvertImage(req: Request, res: Response): Promise<void> {
        try {
            const initConvertImage = new ConvertImage();
            const data = await initConvertImage.toBase64('../public/assets/image/post1.png');
            res.status(200).json({ base64Data: data });
        } catch (error) {
            console.log('Error in handleTestConvertImage: ', error);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        };
    };

    async handleAddEmailUser(req: Request, res: Response): Promise<void> {
        try {
            const email: string = req.body.email;
            if (!email) {
                res.status(200).json({
                    data: { message: 'Input Is Not Emty!', errorCode: 4 }
                });
            } else {
                const initControllerServices = new controllerServices();
                const data: any = await initControllerServices.handleAddEmailUserServices(email);
                if (data) {
                    res.status(200).json({
                        data: data
                    });
                } else {
                    res.status(200).json({
                        message: 'failed!',
                        errorCode: 1
                    });
                };
            };
        } catch (error) {
            console.log('Error in handleAddEmailUser: ', error);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        };
    };
};

export default controller;