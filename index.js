const Joi = require('joi');
const genres = require('./routes/genres');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

let password = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://dino:${password}@cluster0-c4ci4.mongodb.net/test?retryWrites=true&w=majority`, options)
    .then(() => console.log('CONNECTED! YAY!'))
    .catch(err => console.log('NOT connected - ', err));

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));