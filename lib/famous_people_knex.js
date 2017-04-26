const moment = require('moment');
const connect = require('./db_knex');

var arg = process.argv.slice(2)[0];

connect.knex('famous_people').where('first_name', arg).then(function(people){
    if(people){
    console.log(`Found ${people.length} person(s) by the name ${arg}`);
    for(var person in people){
      const datePretty = moment(people[person].birthdate).format("YYYY-MM-DD");
      console.log(`- ${people[person].id} ${people[person].first_name} ${people[person].last_name}, born '${datePretty}'`);
    }
  }
  connect.knex.destroy();
}).catch(function(error) {
  console.error(error)
});