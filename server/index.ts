const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const { PORT } = process.env;
const cors = require('cors');

const corsOption = {
  origin: 'https://portfolio-paolo-tello-seven.vercel.app'
};
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./src/routes/index'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
