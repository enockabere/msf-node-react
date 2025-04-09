import dotenv from "dotenv";
dotenv.config();

export default {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_NAME,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: process.env.DB_CLIENT,
  },
  test: {
    // Add test DB settings
  },
  production: {
    // Add production DB settings
  },
};
