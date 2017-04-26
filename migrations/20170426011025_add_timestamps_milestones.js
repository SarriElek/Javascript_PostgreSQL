
exports.up = function(knex, Promise) {
   return knex.schema.table('milestones', (table) => {
    table.datetime('created_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', (table) => {
    table.dropColumn('created_at');
  });
};