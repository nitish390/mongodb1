var express = require('express');
var port = 3000;
var app = express();
var bodyParser = require('body-parser')
var dogRoutes = require('./routes/dogRoutes')
var catRoutes = require('./routes/catRoutes')

var mongoose = require('mongoose');
mongoose.connect('mongodb://nitish:comnitish@ds032340.mlab.com:32340/comnitish');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// app.use('/dogRoutes',require('./routes/dogRoutes'))

app.use('/dogroutes',dogRoutes)
app.use('/catroutes',catroutes)

app.listen(port, function() {
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:%s',
        port);
});
