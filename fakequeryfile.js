const db = require('./models');

const test = {
  text: `SELECT * FROM picture`,
};

db.query(test, (err, qres) => {
  if (err) {
    console.log(err);
  }
  let locals = qres;
  console.log(locals);
});
