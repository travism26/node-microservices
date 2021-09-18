const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const { response } = require('express');

const app = express();
app.use(bodyParser.json);
app.use(cors());

const posts = {};

app.get('/posts', function (req, res) {
    // res.send(posts);
    res.send('Hello world');
});

app.post('/posts', function (req, res) {
    res.send('Hello world');
    // const id = randomBytes(4).toString('hex');
    // const { title } = req.body;

    // posts[id] = {
    //     id,
    //     title
    // };

    // res.status(201).send('Passed');
});

app.listen(4000, () => {
    console.log('listening on 4000');
});
