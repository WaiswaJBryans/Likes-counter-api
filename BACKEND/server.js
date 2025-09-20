const express = require('express');
const mongoose = require('mongoose');
const likesRouter = require('./Routes/likes.router');
const PORT = 8000;

const app = express();
app.use(express.json());

// connecting to database
mongoose.connect('mongodb://localhost:27017/likeDB')
    .then(() => console.log('connected to database'))
    .catch((err) => console.error('Database connection error', err));


app.use('/likes', likesRouter);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));