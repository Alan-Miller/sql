require('dotenv').config();
const massive = require('massive')
    , { connectionString } = process.env;

module.exports = app => {
    massive(connectionString).then(db => { app.set('db', db) });
}