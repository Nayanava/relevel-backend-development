//require('crypto').randomBytes(64).toString('hex'); - to create secret
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
app.use(express.json());
const posts = [
    {
        'username': 'Samik',
        'post': 'Post1'
    },
    {   
        'username': 'Rehan',
        'post': 'Are we job ready!!!'
    }
]

app.get('/posts', validateToken, (req, res) => {
    res.status(200).send(posts.filter(post => post.username === req.user.name));
});

app.post('/login', (req, res) => {
    // the user is valid - did password authentication
    const username = req.body.username;
    console.log(username);
    const user = {
        name: username
    }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).send({accessToken: accessToken});
});

function validateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader.split(' ')[1];
    if(!accessToken) {
        res.send(401);
        return;
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if(err) {
            res.sendStatus(403);
            return;
        }
        req.user = payload;
        next();
    });
}
app.listen(3000, (err) => {
    if(err) {
        console.log('Error in starting server!', err);
    }
});