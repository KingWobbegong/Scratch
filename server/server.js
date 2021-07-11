const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import indexReducer from '../client/reducers/indexReducer';
import { store, createStore } from 'redux';

const app = express();

const PORT = 3000;

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    let markup,
      store,
      initalState = {
        photoReducer: {
          photoArray: [
            { filepath: './images/kingWobbegong.jpg' },
            { filepath: './images/image.jpg' },
            { filepath: './images/wobbegong.jpg' },
            { filepath: './images/wobbegong1.jpg' },
            { filepath: './images/wobbegong2.jpg' },
          ],
        },
      };
    store = createStore(indexReducer, initalState);
    initalState = store.getState();
    //JSON.stringify(store.getState())
    if (rednerProps) {
      markup = renderToString(
        <Provider store={store}>{<RouterContext {...renderProps} />}</Provider>
      );
    }

    return res.render('index', { markup: markup, initalState: initalState });
  });
});

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/vote', (req, res) => {
  return res.send('this is /vote');
});

app.get('/home', (req, res) => {
  return res.send('this is /home');
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
app.post('/api/upload', (req, res) => {
  console.log(req.body, 'received at /api/upload');
  return res.send(req.body);
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

app.use(express.static(path.join((__dirname, '../build'))));

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
console.log(`listening on port ${PORT}`);
