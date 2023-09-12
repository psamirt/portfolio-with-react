"use strict";
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const { PORT } = process.env;
const cors = require('cors');
const whitelist = ['https://portfolio-paolo-tello-seven.vercel.app'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./src/routes/index'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
