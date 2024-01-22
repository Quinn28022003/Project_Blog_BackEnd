import DbConnect from './dbconnect';

class getProject {

    async getProject() {
        let initDbConnect: DbConnect | null = null;

        try {
            initDbConnect = new DbConnect();

            const data: any = await initDbConnect.query('SELECT p.idPost, p.image, p.title, p.decscription, p.authorName, p.isProject, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate FROM posts p WHERE isProject = 1');
            return data;
        } catch (error) {
            console.log('Error in class => getProject method => getProject: ', error);
            throw new Error(String(error));
        } finally {
            if (initDbConnect) {
                await initDbConnect.close();
            };
        };
    };
};

export default getProject;
