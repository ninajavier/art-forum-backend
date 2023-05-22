const express = require('express');
const app = express();
const cors = require('cors');
const artPiecesController = require('./controllers/artPiecesController.js');

app.use(express.json());
app.use(cors());
app.use('/art-pieces', artPiecesController);

app.get('/', (req, res) => {
    res.send('Welcome to Art Show');
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;