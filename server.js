#!/usr/bin/env node --harmony
'use strict';
const 
    express = require('express'),
    app = express(),
    db = require('./models'),
    morgan = require('morgan');

app.use(morgan('combined'));

const config = {
    beerdb : global.db,
};


console.log('adding libs\n');
require('./lib/beer-search.js')(config, app);

app.listen(3000, function(){
    console.log('ready captain!');
});
