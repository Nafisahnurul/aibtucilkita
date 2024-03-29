const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const getHomePage = require('./routes/index.js');
const getSearch = require('./routes/search.js');

// configure middleware
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

app.use('/', getHomePage);
app.use('/search',getSearch);

// set the app to listen on the port
app.listen(process.env.PORT || 5000, function (req, res) {
    console.log(`Server running`);
});
/*
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

 const getHomePage = require('./routes/index.js');
 const getSearch = require('./routes/search.js');


// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

app.use('/', getHomePage);
app.use('/search',getSearch);


app.listen(process.env.PORT, function (req, res) {
    console.log("App is running");
})
*/