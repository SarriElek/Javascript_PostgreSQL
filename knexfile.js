const config = require('./lib/settings');

module.exports = {

  development: {
    client: 'pg',
    connection: config,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};