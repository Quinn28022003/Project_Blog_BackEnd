import DbConnect from './dbconnect';

class getProject {
    constructor() { };

    async getProject() {
        try {
            const initDbConnect: DbConnect = new DbConnect();
            const data: any = await initDbConnect.query('SELECT * FROM posts WHERE isProject = 1');
            return data;
        } catch (error) {
            console.log('Error in class => getProject method => getProject: ', error);
            throw new Error(String(error));
        };
    };
};

export default getProject;
