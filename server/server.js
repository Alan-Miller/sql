require('dotenv').config();
const app = require('express')()
    , massive = require('./massive')
    , api = require('./api')
    , { port } = process.env;

massive(app);
api(app);

app.listen(port, () => { console.log(`Listening on ${port}.`); });