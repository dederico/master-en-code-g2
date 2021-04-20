// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'gqhuthfx',
      user: 'gqhuthfx',
      password: 'R11RNJm3vVHkedkvVJITdk-GKR80-ZL9'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'gqhuthfx',
      user: 'gqhuthfx',
      password: 'R11RNJm3vVHkedkvVJITdk-GKR80-ZL9'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'gqhuthfx',
      user: 'gqhuthfx',
      password: 'R11RNJm3vVHkedkvVJITdk-GKR80-ZL9'
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
