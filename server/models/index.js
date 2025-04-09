// server/config/db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

let sequelize;

const dbClient = process.env.DB_CLIENT;
console.log(`Connecting to ${dbClient.toUpperCase()}...`);

const loggingFn = process.env.SEQ_LOGGING === "true" ? console.log : false;

if (dbClient === "postgres") {
  sequelize = new Sequelize(
    process.env.PG_NAME,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      dialect: "postgres",
      logging: loggingFn,
    }
  );
} else if (dbClient === "mysql") {
  sequelize = new Sequelize(
    process.env.MYSQL_NAME,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      dialect: "mysql",
      logging: loggingFn,
    }
  );
} else {
  throw new Error("Unsupported DB_CLIENT specified in .env");
}

export default sequelize;
