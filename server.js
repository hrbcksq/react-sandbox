var express = require('express');

var app = express();

app.use(express.static('source'));

app.listen(3000, () => {
    console.log('Express serveris up on port 3000');
});