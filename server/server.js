const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const Busboy = require('busboy');
const cors = require('cors');
const app = express();

const PORT = 3000;

const SQLController = require('./controllers/SQLController');

//handle parsing request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/vote', (req, res) => {
  return res.send('this is /vote');
});

app.get('/home', SQLController.getFilesFromDB, (req, res) => {
  console.log(req.body, 'received at /app/home');
  console.log('res.locals from app/home/get', res.locals);
  return res.status(200).json(res.locals);
});

app.get('/upload', (req, res) => {
  return res.send('this is /upload');
});

app.get('/signin', (req, res) => {
  return res.send('this is /signin');
});

app.get('/signup', (req, res) => {
  return res.send('this is /signup');
});

app.get('/photos', (req, res) => {
  return res.send('this is /photos');
});

app.post('/api/vote', (req, res) => {
  console.log(req.body, 'received at /api/vote');
  return res.send(req.body);
});

app.post('/api/update', (req, res) => {
  console.log(req.body, 'received at /api/update');
  return res.send(req.body);
});

/*  This may need to be adjusted as we figur out
how to send files with post requests? */
app.post('/api/upload', function (req, res) {
  const busboy = new Busboy({ headers: req.headers });
  let returnFilename, returnPrepend, returnFilepath, filepath;
  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    let filePrepend = 1;
    filepath = './images/' + filename;
    let saveTo = path.join(__dirname, filepath);
    while (fs.existsSync(saveTo)) {
      filepath = `./images/[${filePrepend}]` + filename;
      saveTo = path.join(__dirname, filepath);
      filePrepend += 1;
    }
    console.log(`Uploading: ${filepath}`);
    file.pipe(fs.createWriteStream(saveTo));
  });
  busboy.on('finish', function () {
    console.log('Upload complete');
    res.writeHead(200, { Connection: 'close' });
    res.end(filepath);
  });
  return req.pipe(busboy);
});

app.use('/images', express.static(path.join(__dirname, './images')));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'

  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT);
console.log(`listening on port ${PORT} in envirnoment ${process.env.NODE_ENV}`);
