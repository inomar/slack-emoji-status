const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const statusRouter = require('./src/routers/statusRouter');

app.set('port', port);
app.use(bodyParser.json());
app.use('/', statusRouter);

app.listen(app.get('port'),() => { 
  console.log(`emoji status app is running at localhost:${app.get('port')}`); 
});
