const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Import custom middleware
const { clog } = require('./middleware/clog');
app.use(clog);

// Middleware for parsing JSON and urlencoded from data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.use(routes);

//  deligate the rest of get request to the home page
app.get('*', (req, res) => {
    res.status(200).send('send all inquiry through /api');
});

app.listen(PORT, () => {
    console.log(`App listening at the ${PORT}`);
});

