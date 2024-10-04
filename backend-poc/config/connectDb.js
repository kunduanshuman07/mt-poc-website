import mysql from "mysql2";
import { config } from "dotenv";

config();

const db = mysql.createConnection({
    host: process.env.dbHostname,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }
    console.log(`Connected to ${process.env.database} database`);
});

export default db;
