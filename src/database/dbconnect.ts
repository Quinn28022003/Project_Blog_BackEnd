import mysql, { Connection, QueryError } from 'mysql2';

class dbConnect {
    private connection: Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASSWORD,
            database: 'blog'
        });
    };

    public connect() {
        this.connection.connect((err: QueryError | null) => {
            if (err) {
                console.error('Error connecting to database:', err);
                throw err;
            }
            console.log('Connected to the database!');
        });
    };

    public close(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.end((err: QueryError | null) => {
                if (err) {
                    console.error('Error closing database connection:', err);
                    reject(err);
                } else {
                    console.log('Closed database connection!');
                    resolve();
                };
            });
        });
    };

    public query(sql: string, params?: any) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        })
    };
};

export default dbConnect;
