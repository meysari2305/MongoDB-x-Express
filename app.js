const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const ProductRouterV3 = require('./app/product_v3/routes');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('api/v3', ProductRouterV3);
app.listen(3007, () => console.log('server up and running'));
