var express = require('express');
var routes = require('./routes/index.js');
var http = require('http');
var path = require('path');
var session = require('express-session');
var MongoStore = require('connect-mongo');
var settings = require('./settings');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var methodOverride = require('method-override');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(flash());

app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
    secret: settings.cookieSecret,
    key: settings.db,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}//30 days
    /*store: new MongoStore({
        db: settings.db
    })*/
}));
app.use(express.static(path.join(__dirname, 'public')));
// development only

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

routes(app);
