let pg = require('pg');

let conString =
  'postgres://kgfdbweo:P6oEYXFN8YnCZoBGR51dRxM6oR3d8gaS@kashin.db.elephantsql.com/kgfdbweo';

let client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error('cound not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});
