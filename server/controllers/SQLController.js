const db = require('../models');

const SQLController = {};

SQLController.getFilesFromDB = (req, res, next) => {
  // SQL Query

  const getPhoto = {
    text: `SELECT * FROM pictures`,
  };

  db.query(getPhoto, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals = qres;
    console.log(res.locals);
    return next();
  });
};

module.exports = SQLController;
