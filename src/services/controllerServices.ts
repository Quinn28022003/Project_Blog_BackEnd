import getRecentBlog from "../model/getRecentBlog";
import getBlog from "../model/getBlog";
import getTopicsPosts from "../model/getTopicsPosts";
import getProject from "../model/getProject";
import getDetailPosts from "../model/getDetailPosts";
import { ConvertImage } from "../utils/convertImage";
import postAddEmailUser from "../model/postAddEmailUser";

class controllerServices {
    async handleCallFunctionConvertImg(functionData: any): Promise<any> {
        const data: any = await functionData();
        const initConvertImage = new ConvertImage();

        const container: any = await Promise.all(
            data.map(async (item: any) => {
                const imgPath: string = item.image;
                const base64Img = await initConvertImage.toBase64(imgPath);
                return { ...item, image: base64Img };
            })
        );
        return container
    };

    async handleGetRecentBlogServices(): Promise<any> {
        try {
            const initGetRecentBlog = new getRecentBlog();
            return this.handleCallFunctionConvertImg(initGetRecentBlog.getRecentBlog);
        } catch (error) {
            console.log('Error in class => controllerServices method => handleGetRecentBlogServices: ', error);
            throw new Error(String(error));
        };
    };

    async handleGetBlogServices(page: number, postsPerPage: number): Promise<any> {
        try {
            const initGetBlog = new getBlog();
            const data: any = await initGetBlog.getBlog(page, postsPerPage);
            const initConvertImage = new ConvertImage();

            const container: any = await Promise.all(
                data.map(async (item: any) => {
                    const imgPath: string = item.image;
                    const base64Img = await initConvertImage.toBase64(imgPath);
                    return { ...item, image: base64Img };
                })
            );
            return container;
        } catch (error) {
            console.log('Error in handleGetBlogServices: ', error);
            throw new Error(String(error));
        };
    };

    async handleGetProjectServices(): Promise<any> {
        try {
            const initGetProject = new getProject();
            return this.handleCallFunctionConvertImg(initGetProject.getProject);
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
            const data: any = await initgetDetailPosts.getDetailPosts(idPosts);
            const initConvertImage = new ConvertImage();

            const container: any = await Promise.all(
                data.map(async (item: any) => {
                    const imgPath: string = item.image;
                    const base64Img = await initConvertImage.toBase64(imgPath);
                    return { ...item, image: base64Img };
                })
            );
            return container;
        } catch (error) {
            console.log('Error in class => controllerServices method => handleGetDetailPostsServices: ', error);
            throw new Error(String(error));
        };
    };

    async handleAddEmailUserServices(email: string) {
        try {
            const initPostAddEmailUser = new postAddEmailUser();
            const data: any = await initPostAddEmailUser.postAddEmailUser(email);
            return data;
        } catch (error) {
            console.log('Error in class => controllerServices method => handleAddEmailUserServices: ', error);
            throw new Error(String(error));
        };
    };
};

export default controllerServices;