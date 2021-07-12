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

SQLController.uploadFileToDB = (req, res, next) => {
  const filepath = req.body;
  console.log('req.body', req.body);
  console.log('filePath', filepath);
  const uploadPhotoQ = {
    text: `INSERT INTO pictures (filepath) VALUES ($1)`,
  };

  db.query(uploadPhotoQ, [filepath], (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals = qres;
  });
};

module.exports = SQLController;
