import DbConnect from './dbconnect';

class getBlog {
    constructor() { };

    async getBlog() {
        try {
            const initDbConnect: DbConnect = new DbConnect();
            const data: any = await initDbConnect.query('SELECT p.idPost, p.image, p.title, p.decscription, p.authorName, p.isProject, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate FROM posts p WHERE isProject = 0');
            return data;
        } catch (error) {
            console.log('Error in class => getBlog method => getBlog: ', error);
            throw new Error(String(error));
        };
    };
};

export default getBlog;
