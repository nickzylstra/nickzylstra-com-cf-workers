const express = require('express');
const path = require('path');
const log = require('fancy-log');
const cors = require('cors');
const helmet = require('helmet');
const customersRouter = require('./routes/customers');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const logHostname = (req, res, next) => { log(`hostname: '${req.hostname}'`); next(); };

app.use('/', cors(), express.static(path.resolve(__dirname, '..', '..', 'public')));

const reactRouterRoutesRE = /\/(?!api).*(?!\.).*$/;
app.use(reactRouterRoutesRE, cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});


const APIWhitelist = ['https://nickzylstra.com', 'https://www.nickzylstra.com', 'http://localhost', 'http://127.0.0.1'];
const APIWhitelistMap = new Map(APIWhitelist.map((host) => [host, true]));
const APICorsOptions = {
  origin: (origin, callback) => {
    if (origin && APIWhitelistMap.has(origin)) {
      callback(null, true);
      return;
    }
    log(`API request denied for origin: ${origin}`);
    callback(new Error('Not allowed by CORS'));
  },
};

app.use('/api/customers', cors(APICorsOptions), customersRouter);

module.exports = app;
