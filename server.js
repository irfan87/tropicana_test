let express = require('express');
let app = express();

let port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, (req, res) => {
    console.log('Express is running on port ' + port);
});