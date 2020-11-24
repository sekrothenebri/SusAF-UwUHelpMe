const express = require('express');
const bodyParser = require('body-parser');
const app = express();
console.log('const completed')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('part 2 completed')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(3000, () => console.log('RePL wOKEN UP'));

var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('public/index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});