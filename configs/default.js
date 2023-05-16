module.exports = {
  postgres: {
    options: {
      username: "postgres",
      host: "localhost",
      password: "123",
      port: 5432,
      database: "postgis",
      dialect: "postgres",
    },
    client: null,
  },
};
