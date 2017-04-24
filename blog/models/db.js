/**
 * Created by zm on 2017/4/24.
 */
var settings = require('../settings.js'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port, {}));
