const db = require('../models');

const SQLController = {};

//gets files from database
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
    console.log('this is coming from getPhoto', res.locals);
    return next();
  });
};
//takes the returned body from saving the file to folder,
// and then saves that filepath to database
SQLController.uploadFileToDB = (req, res, next) => {
  const { filepath } = req.body;
  console.log('req.body', req.body);
  console.log('filePath', filepath);
  const uploadPhotoQ = {
    text: `INSERT INTO pictures (filepath, vote_count) VALUES ($1, $2)`,
  };

  db.query(uploadPhotoQ, [filepath, 0], (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals = qres;
  });
};

module.exports = SQLController;
