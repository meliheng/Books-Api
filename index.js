const express = require('express');
const mongoose = require('mongoose');
const booksRoute = require('./routes/Book');

require('dotenv').config();

const app = express();
app.use(express.json());

try {
	mongoose.connect(process.env.DB_CONNECTION);
} catch (err) {
	console.log(err);
}
app.listen(process.env.PORT, (req, res) => {
	console.log(`server is listening on ${process.env.PORT}`);
});

app.use('/books', booksRoute);
