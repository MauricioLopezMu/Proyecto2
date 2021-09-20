const express = require('express');
const morgan = require('morgan');
const server = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

server.use(cors());
server.use(morgan('common'));
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(express.static(path.join(__dirname, 'build')));

server.use('/api/users', require('./src/routes/userAgent'));
server.use('/api/data', require('./src/routes/getData'));

var ser = server.listen(process.env.PORT || 4000, () => {
    console.log('Server on Port: ', ser.address().port)
});