'use strict';
const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHanlder = require('./error-handlers/500');
const logger = require('./middleware/logger.js')
app.use(express.json());
app.use(logger);

app.get('/person', readPerson);

function readPerson(req, res) {

    if (req.query.name === '') {

        throw new Error('name can not be empty')
    }

    res.json({
        name: req.query.name,
    })
}

app.get('/person/:name', readPersonParams)

function readPersonParams(req, res) {
    res.status(200).json({
        name: req.params.name,
    })
}
app.get('/bad', (req, res) => {
    throw new Error('Something went wrong :(');
});

app.post('/person', creatPerson)
function creatPerson(req, res) {
    console.log(req.body);

    res.json(req.body);
}
app.put('/person/:name', updatePerson);
function updatePerson(req, res) {

    res.json(req.body);
}

app.use('*', notFoundHandler);
app.use(errorHanlder);


function start(port) {
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}

module.exports = {
    server: app,
    start: start
}

