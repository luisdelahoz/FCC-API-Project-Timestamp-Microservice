require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
