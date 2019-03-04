const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const auth = require('./routes/auth');
const posts = require('./routes/posts');
const users = require('./routes/users');

//bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test123@ds141294.mlab.com:41294/pssocial', { useNewUrlParser: true })
.then(() => { console.log('Connected to MongoDB!')})
.catch(err => console.log(err));

app.use(cors());

app.use('/auth', auth);
app.use('/', [posts, users]);

app.listen(port, () => {
    console.log(`app running on port ${port}!`);
});