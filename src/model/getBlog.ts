import DbConnect from './dbconnect';

class GetBlog {
    async getBlog(page: number, postsPerPage: number) {
        let initDbConnect: DbConnect | null = null;

        try {
            initDbConnect = new DbConnect();
            const startIndex = (page - 1) * postsPerPage;
            const query = `
                            SELECT p.idPost, p.image, p.title, p.decscription, p.authorName, p.isProject, DATE_FORMAT(DateSubmitted, "%m/%d/%Y") AS FormattedDate
                            FROM posts p
                            WHERE isProject = 0
                            LIMIT ?, ?
                        `;
            const data: any = await initDbConnect.query(query, [startIndex, postsPerPage]);
            return data;
        } catch (error) {
            console.log('Error in class => getBlog method => getBlog: ', error);
            throw new Error(String(error));
        } finally {
            if (initDbConnect) {
                await initDbConnect.close();
            };
        };
    };
};

export default GetBlog;

