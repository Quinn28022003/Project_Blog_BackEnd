import DbConnect from './dbconnect';

class getBlog {
    constructor() { };

    async getBlog() {
        try {
            const initDbConnect: DbConnect = new DbConnect();
            const data: any = await initDbConnect.query('SELECT *, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate FROM posts WHERE isProject = 0');
            return data;
        } catch (error) {
            console.log('Error in class => getBlog method => getBlog: ', error);
            throw new Error(String(error));
        };
    };
};

export default getBlog;
