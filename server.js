const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }));

require('./routes/user.routes')(app);
require('./routes/tree.routes')(app);
require("./models/db");

app.listen(9000, () => console.log(`listening on http://localhost:9000`));