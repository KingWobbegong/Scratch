const db = require('../models');

const SQLController = {};

//gets files from database
SQLController.getFilesFromDB = (req, res, next) => {
  // SQL Query

  const getPhoto = {
    text: `SELECT * FROM pictures
          ORDER BY vote_count DESC;`,
  };

  db.query(getPhoto, (err, qres) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.locals = qres;
    // console.log('this is coming from getPhoto', res.locals);
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

// UPDATE table
// SET column1 = value1,
//     column2 = value2 ,...
// WHERE
//   condition;

// MiddleWare to increment vote_count on a picture
SQLController.vote = (req, res, next) => {
  // SQL Query
  //distr the id
  const { _id, change } = req.body;
  // check if change is === add
  if (change === 'add') {
    const voteQuery = {
      text: `UPDATE pictures SET vote_count = vote_count+1 WHERE _id = $1`,
    };

    db.query(voteQuery, [_id], (err, res) => {
      // if change is true then increment the vote
      if (err) {
        console.log(err);
        return next(err);
      }
      res.locals = res;
      console.log('this is coming from updateIncrementCount', res.locals);
      return next();
    });
  }
  // else
  else {
    return next('change needs to be add!');
  }
};

module.exports = SQLController;
