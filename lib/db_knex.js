const settings = require("./settings");

module.exports = {
  knex: require('knex')({
    client: 'pg',
    connection: settings
  })
}