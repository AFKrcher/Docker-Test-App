// Update with your config settings.
const connectionString = process.env.DB_CONNECTION_STRING
module.exports = {

  development: {
    client: 'pg',
    connection: connectionString
    //connection: 'postgres://postgres:password@localhost:5432/appdb'
    // replace USER_NAME, USER_PASSWORD, and DATABASE_NAME with your Docker PostgreSQL container's username, password and an *empty* database
    // that you have created on your Docker PostgreSQL container volume
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'appdb',
      user:     'postgres',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'items'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'appdb',
      user:     'postgres',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};