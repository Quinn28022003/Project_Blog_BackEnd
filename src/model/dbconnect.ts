import mysql, { Pool, PoolConnection, QueryError, ResultSetHeader, RowDataPacket } from 'mysql2';

class dbConnect {
    private pool: Pool;

    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASSWORD,
            database: 'blog',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    };

    public async connect(): Promise<PoolConnection> {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err: any, connection: PoolConnection) => {
                if (err) {
                    console.error('Error connecting to database:', err);
                    reject(err);
                } else {
                    console.log('Connected to the database!');
                    resolve(connection);
                };
            });
        });
    };

    public async close(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.pool.end((err: any) => {
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

    public async query(sql: string, params?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, params, (err: QueryError | null, results: RowDataPacket[] | ResultSetHeader) => {
                if (err) {
                    console.error('Error in database query:', err);
                    reject(err);
                } else {
                    console.log('Query executed successfully!');
                    resolve(results);
                };
            });
        });
    };
};

export default dbConnect;
