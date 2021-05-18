// Update with your config settings.

module.exports = {
  // Contiene datos de prueba para hacer todo tipo de experimentos
  development: {
    client: 'postgresql',
    connection: {
      host: 'kashin.db.elephantsql.com',
      database: 'dxzylyeb',
      user: 'dxzylyeb',
      password: 'kyAWvR1CPr-CIj-JKKkwVur8G3JAlqp3',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // Contiene una copia exacta (o tan exacta como se necesite) de producción
  staging: {
    client: 'postgresql',
    connection: {
      host: 'kashin.db.elephantsql.com',
      database: 'dxzylyeb',
      user: 'dxzylyeb',
      password: 'kyAWvR1CPr-CIj-JKKkwVur8G3JAlqp3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // Los datos reales de tu negocio: los datos en producción
  production: {
    client: 'postgresql',
    connection: {
      host: 'kashin.db.elephantsql.com',
      database: 'dxzylyeb',
      user: 'dxzylyeb',
      password: 'kyAWvR1CPr-CIj-JKKkwVur8G3JAlqp3',
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