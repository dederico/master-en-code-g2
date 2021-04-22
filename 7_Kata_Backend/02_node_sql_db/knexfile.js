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
  // Contiene una copia exacta o tan exacta como se necesite

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

  // Los datos reales de tu negocio
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
