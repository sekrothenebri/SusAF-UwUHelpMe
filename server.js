const express = require('express');
const bodyParser = require('body-parser');

const app = express();
timeout : 5000
console.log('const completed')
console.log('starting database...(1/3')
console.log('ERROR::Database missing; Check your code(server.js // databaseStart 1/3)')

// const mongoose = require('mongoose');
// const path = require('path');


// const db = process.env.Uri

/* mongoose
 * .connect(db)
 * .then(() => console.log('MongoDB Connected...'))
 * .catch(err => console.log(err));
 * console.log('database started completely.')
 */













app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('part 2 completed')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(3000, () => console.log('RePL wOKEN UP'));