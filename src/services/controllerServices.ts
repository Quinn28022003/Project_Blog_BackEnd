import getRecentBlog from "../database/getRecentBlog";
import getBlog from "../database/getBlog";
import getTopicsPosts from "../database/getTopicsPosts";
import getProject from "../database/getProject";
import getDetailPosts from "../database/getDetailPosts";

class controllerServices {
    constructor() { };

    async handleGetRecentBlogServices(): Promise<any> {
        try {
            const initGetRecentBlog = new getRecentBlog();
            return initGetRecentBlog.getRecentBlog();
        } catch (error) {
            console.log('Error in class => controllerServices method => handleGetRecentBlogServices: ', error);
            throw new Error(String(error));
        };
    };

    async handleGetBlogServices(): Promise<any> {
        try {
            const initGetBlog = new getBlog();
            return initGetBlog.getBlog();
        } catch (error) {
            console.log('Error in class => controllerServices method => handleGetBlogServices: ', error);
            throw new Error(String(error));
        };
    };

    async handleGetProjectServices(): Promise<any> {
        try {
            const initGetProject = new getProject();
            return initGetProject.getProject();
        } catch (error) {
            console.log('Error in class => controllerServices method => handleGetProjectServices: ', error);
            throw new Error(String(error));
        };
    };

    async handleGetTopicsPostsServices(idPosts: number): Promise<any> {
        try {
            const initGetTopicsPosts = new getTopicsPosts();
            return initGetTopicsPosts.getTopicsPosts(idPosts);
        } catch (error) {
            console.log('Error in class => controllerServices method => handleGetTopicsPostsServices: ', error);
            throw new Error(String(error));
        };
    };

    async handleGetDetailPostsServices(idPosts: number): Promise<any> {
        try {
            const initgetDetailPosts = new getDetailPosts();
            return initgetDetailPosts.getDetailPosts(idPosts);
        } catch (error) {
            console.log('Error in class => controllerServices method => handleGetDetailPostsServices: ', error);
            throw new Error(String(error));
        };
    };
};

export default controllerServices;