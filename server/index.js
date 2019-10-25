require('dotenv').config();
const {CONNECTION_STRING} = process.env;

const massive = require('massive');
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database connected!');
})

const express = require('express');
const app = express();
app.use(express.json());

const {getHouses, addHouse, deleteHouse} = require('./controller')
app.get('/api/houses', getHouses);
app.post('/api/add_house', addHouse);
app.delete('/api/delete_house/:id', deleteHouse);

const port = 4000;
app.listen(port, console.log(`Listening on port ${port}.`))