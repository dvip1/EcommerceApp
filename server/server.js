const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => res.json({ message: 'Welcome to the server' }));
app.post('/', (req, res) => {
    console.log(req.body);
    });
app.listen(port, () => console.log(`Server running on port ${port}`));