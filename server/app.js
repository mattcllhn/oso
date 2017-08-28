var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var passport = require('./strategies/userStrategy');
var session = require('express-session');

// Route includes
var index = require('./routes/index');

// user routes go here

var user = require('./routes/user');
var register = require('./routes/register');

// custom routes go here


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', register);
app.use('/user', user);

// custom routes go here

app.use('/', index);

// Mongo Connection //
var mongoURI = '';
if(process.env.MONGODB_URI !== undefined) {
    mongoURI = process.env.MONGODB_URI;
} else {
    // mongoURI = 'mongodb://localhost:27017/new_mongo_db';

    // change to m-lab later when hosting
    mongoURI = 'mongodb://one_shelf_over:xbr2nma3@ds151973.mlab.com:51973/one_shelf_over';
    // mongoURI = 'mongodb://bairdcraig10:xbr2nma3@ds133261.mlab.com:33261/new_mongo_db';
}

// var mongoURI = 'mongodb://localhost:27017/passport';
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
   if(err) {
     console.log('MONGO ERROR: ', err);
   }
   res.sendStatus(500);
});

mongoDB.once('open', function(){
   console.log('Connected to Mongo');
});

// App Set //
app.set('port', (process.env.PORT || 5000));

// Listen //
app.listen(app.get('port'), function(){
   console.log('Listening on port: ' + app.get('port'));
});