#!/usr/bin/env node --harmony
'use strict';
const 
    express = require('express'),
    cors = require('cors'),
    app = express(),
    db = require('./models'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const config = {
    beerdb : global.db,
};


console.log('adding libs\n');
require('./lib/beer-search.js')(config, app);

app.listen(process.env.port || 3000, function(){
    console.log('ready captain!');
});
