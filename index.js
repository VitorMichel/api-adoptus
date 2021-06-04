const express = require('express');
// const routes = require('../src/routes.js');
const routes = require('./src/routes')
var cors = require('cors');
const { json } = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
    console.log('🚀 Server started!');
})