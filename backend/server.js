require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to database');
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}
).catch(err => {
    console.log(err);
}
);


