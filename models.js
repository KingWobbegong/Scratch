const { Pool } = require('pg');

const PG_URI =
  'postgres://kgfdbweo:P6oEYXFN8YnCZoBGR51dRxM6oR3d8gaS@kashin.db.elephantsql.com/kgfdbweo';

const pool = new Pool({
  connectionsString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
