const express = (require('express'));
const app = express();
const cors = require('cors');
const artPiecesController = require('./controllers/artPiecesController');


app.use(express.json());
app.use(cors());

app.use('/art-pieces', artPiecesController);

app.get('/', (req, res) => {
    res.send('Welcome to Creative-name-here');
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;