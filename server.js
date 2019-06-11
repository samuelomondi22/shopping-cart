const express = require('express');

const app = express();

const path = require('path');

// app.get('/', function (req, res) {
//     res.send(path.join(__dirname, '/static/index'))
//   })
app.use(express.static('static'));

app.listen(8000, () => {
    console.log("app listening on port 8000");
    
})