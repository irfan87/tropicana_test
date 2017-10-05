let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        "message": "right now you can use body parser to fetch json! hooray!!!"
    });
});

app.listen(port, (req, res) => {
    console.log('Express is running on port ' + port);
});