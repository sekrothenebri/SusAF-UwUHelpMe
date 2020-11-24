const express = require('express');
const bodyParser = require('body-parser');
const app = express();
timeout : 5000
console.log('const completed')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('part 2 completed')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(3000, () => console.log('RePL wOKEN UP'));