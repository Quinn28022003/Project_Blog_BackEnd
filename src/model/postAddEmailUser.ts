import DbConnect from './dbconnect';

class postAddEmailUser {

    async postAddEmailUser(email: string) {
        let initDbConnect: DbConnect | null = null;

        try {
            initDbConnect = new DbConnect();

            const isCheckEmail: any = await initDbConnect.query(`SELECT email FROM subscriber WHERE email = '${email}'`);

            if (!isCheckEmail[0]) {
                const data: any = await initDbConnect.query(`INSERT INTO subscriber (email) VALUES (?)`, [email]);
                if (data) {
                    return { message: 'Add Email Success!', errorCode: 0 };
                } else {
                    return {
                        message: 'Add Email Success!',
                        errorCode: 3
                    };
                };
            } else {
                return { message: 'Email Already Exist!', errorCode: 2 };
            };
        } catch (error) {
            console.log('Error in class => postAddEmailUser method => postAddEmailUser: ', error);
            throw new Error(String(error));
        } finally {
            if (initDbConnect) {
                await initDbConnect.close();
            };
        };
    };
};

export default postAddEmailUser;
