import DbConnect from './dbconnect';

class getRecentBlog {
    constructor() { };

    async getRecentBlog() {
        try {
            const initDbConnect: DbConnect = new DbConnect();
            const data = await initDbConnect.query('SELECT *, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate FROM posts ORDER BY DateSubmitted DESC');
            return data;
        } catch (error) {
            console.log('Error in class => getRecentBlog method => getRecentBlog: ', error);
            throw new Error(String(error));
        };
    };
};

export default getRecentBlog;
