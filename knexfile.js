module.exports = {
  test: {
    client : "pg",
    //version: ""
    connection: {
      host: "localhost",
      user: "postgres",
      password: "123456",
      database: "finTDD",
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
}


