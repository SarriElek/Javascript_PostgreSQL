const db = require("./db");

function getFamousPerson(name, done){
  db.connect((error, client) => {
    client.query("SELECT id, first_name, last_name, to_char(birthdate, 'YYYY-MM-DD') birthdate FROM famous_people WHERE first_name = $1::text", [name], (err, result) => {
      done(error, result);
      client.end();
    })
  });
}



var arg = process.argv.slice(2)[0];

console.log('Searching ...');

getFamousPerson(arg, (error, people) => {
  if (error) {
    return console.error("error running query", error);
  }
  if(people.rows){
    console.log(`Found ${people.rows.length} person(s) by the name ${arg}`);
    for(var row in people.rows){
      console.log(`- ${people.rows[row].id} ${people.rows[row].first_name} ${people.rows[row].last_name}, born '${people.rows[row].birthdate}'`);
    }
  }
  console.log()
});