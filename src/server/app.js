const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const customersRouter = require('./routes/customers');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.resolve(__dirname, '..', '..', 'public')));

const reactRouterRoutesRE = /\/(?!api).*(?!\.).*$/;
app.use(reactRouterRoutesRE, (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

app.use('/api/customers', customersRouter);

module.exports = app;
