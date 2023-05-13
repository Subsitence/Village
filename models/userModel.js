const pool = require("../services/db.js");

class User {
  static async getAll() {
    const client = await pool.connect();
    const response = await client.query("SELECT * FROM public.users");
    client.release();
    return response.rows;
  }

  static async getByUserName(username) {
    const client = await pool.connect();
    const response = await client.query(
      `SELECT * FROM public.users WHERE username = '${username}'`
    );
    client.release();
    return response.rows;
  }

  static async insertUser(payload) {
    const client = await pool.connect();
    const response = await client.query(
      `INSERT INTO users(name, username, password) 
      VALUES ('${payload.name}', '${payload.username}', '${payload.password}')`
    );
    client.release();
    return response;
  }
}

module.exports = User;
