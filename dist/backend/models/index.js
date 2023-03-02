"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/techFallDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Error connecting to database: ', error);
});
