import DbConnect from './dbconnect';

class getRecentBlog {
    constructor() { };

    async getRecentBlog() {
        try {
            const initDbConnect: DbConnect = new DbConnect();
            const data = await initDbConnect.query('SELECT p.idPost, p.image, p.title, p.decscription, p.authorName, p.isProject, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate FROM posts p ORDER BY DateSubmitted DESC');
            return data;
        } catch (error) {
            console.log('Error in class => getRecentBlog method => getRecentBlog: ', error);
            throw new Error(String(error));
        };
    };
};

export default getRecentBlog;
