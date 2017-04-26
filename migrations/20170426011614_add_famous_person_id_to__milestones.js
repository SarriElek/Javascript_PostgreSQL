
exports.up = function(knex, Promise) {
   return knex.schema.table('milestones', (table) => {
    table.integer('famous_person_id')
         .notNullable()
         .references('id')
         .inTable('famous_people')
         .onDelete('CASCADE')
         .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', (table) => {
    table.dropColumn('famous_person_id');
  });
};