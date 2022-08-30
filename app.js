const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const kalem_allah = require('./api/routes/kalem_allah');
const kalem_allah_2 = require('./api/routes/kalem_allah_2');
const alrasol_mohamed = require('./api/routes/alrasol_mohamed');
const alrasol_mohamed_2 = require('./api/routes/alrasol_mohamed_2');
const noah_1 = require('./api/routes/noah');
const youssef = require('./api/routes/youssef');
const youssef_2 = require('./api/routes/youssef_2');
const aflam = require('./api/routes/aflam');


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/kalem_allah_1',kalem_allah);
app.use('/kalem_allah_2',kalem_allah_2);
app.use('/noah_1',noah_1);
app.use('/youssef_1',youssef);
app.use('/youssef_2',youssef_2);
app.use('/alrasol_mohamed_1',alrasol_mohamed);
app.use('/alrasol_mohamed_2',alrasol_mohamed_2);
app.use('/aflam',aflam);

module.exports = app;