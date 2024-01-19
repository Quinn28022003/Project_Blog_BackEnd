import DbConnect from './dbconnect';

class getDetailPosts {
    constructor() { };

    async getDetailPosts(idPosts: number) {
        try {
            const initDbConnect: DbConnect = new DbConnect();
            const data: any = await initDbConnect.query(`SELECT p.idPost, p.image, p.title, p.decscription, p.authorName, p.isProject, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate FROM posts p WHERE p.idPost = ${idPosts}`);
            return data;
        } catch (error) {
            console.log('Error in class => getDetailPosts method => getDetailPosts: ', error);
            throw new Error(String(error));
        };
    };
};

export default getDetailPosts;
