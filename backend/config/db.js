import Sequelize from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';

// //-- Load environment variables
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '/environments/dev.env') });

const sequelize = new Sequelize(process.env.NAME, process.env.DB_NAME, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'
});

export { sequelize };
