const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const cacheTimeSeconds = 60 * 60 * 24 * 7 * 4;
const setResCaching = (req, res, next) => {
  res.set({
    'Cache-Control': `public, max-age=${cacheTimeSeconds}`,
  });
  next();
};

app.use('/', setResCaching, express.static(path.resolve(__dirname, '..', '..', 'public')));

const reactRouterRoutesRE = /\/(?!api).*(?!\.).*$/;
app.use(reactRouterRoutesRE, setResCaching, (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;
