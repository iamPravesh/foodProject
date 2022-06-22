// make a express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);

