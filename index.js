'use strict';
const server = require('./src/server.js');
require('dotenv').config();
const port = process.env.PORT;
server.start(port);

