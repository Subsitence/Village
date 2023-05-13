const { Pool } = require("pg");
const config = require("config");

const pool = new Pool({
  user: config.get("db.pguser"),
  host: config.get("db.pghost"),
  database: config.get("db.pgdatabase"),
  password: config.get("db.pgpassword"),
  port: config.get("db.pgport"),
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
