/**
 * @file Manages database connection configuration.
 * @author Muhammad Insan Kamil
 */

/** Destruct environment variable to get database configuration */
require('dotenv').config()
const {
  DB_USERNAME = null,
  DB_PASSWORD = null,
  DB_HOST = "127.0.0.1",
  DB_NAME = "database",
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
  },
};

