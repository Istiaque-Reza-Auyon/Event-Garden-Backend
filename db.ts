import { Sequelize } from 'sequelize';


const db = new Sequelize('Event Garden', 'postgres', '10398', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5032
});






export default db;