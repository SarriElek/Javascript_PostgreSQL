const connect = require('./db_knex');

const args = process.argv.slice(2);
const first_name = args[0];
const last_name = args[1];
const birth_date = args[2];

function addPerson(first_name, last_name, birth_date){
  connect.knex.insert([{first_name: first_name, last_name: last_name, birthdate: birth_date}]).into('famous_people').then(() => {
    console.log('inserted');
    connect.knex.destroy();
  }).catch(function(error) {
    console.error(error)
  });
}

addPerson(first_name, last_name, birth_date);
