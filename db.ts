import { Dialect, Sequelize } from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.DB_NAME!, process.env.DB_DIALECT!, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
    port: Number(process.env.DB_PORT)
});






export default db;