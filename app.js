// const express = require('express');
// const bodyParser = require('body-parser'); // package that can be used to handle JSON requests.

// const product = require('./routes/product.route'); // Imports routes for the products
// const app = express();

// app.use('/products', product);

// let port = 1234;

// app.listen(port, () => {
//     console.log('Server is up and running on port number ' + port);
// });



// // Set up mongoose connection // the mongoDB ODM for Node.JS
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://will:lamanga23@ds125211.mlab.com:25211/crudtestcodeburst';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));




// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://will:lamanga23@ds125211.mlab.com:25211/crudtestcodeburst';
// let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});