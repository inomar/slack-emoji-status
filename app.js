const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const setProfile = require('./src/setProfile');
const getTasks = require('./src/getTasks');
const status = require('./src/status'); 

app.set('port', port);
app.use(bodyParser.json());
app.get('/set_emoji_status', (req, res) => {
  getTasks().then(({ data }) => {
    setProfile(status.currentEmojiStatus(data.length)).then(d => {
      if (!d.data.ok) {
        console.log(d.data.error);
      }
    }).catch(error => {
      console.log(error.message);
    });
  }).catch(error => {
    setProfile(status.errorStatus(error.message));
  })
  res.json({ message: 'set status' });
});

app.post('/set_emoji_status', (req, res) => {
  console.log(res.body)
  res.json({ hoge: 'ok'})
});

app.listen(app.get('port'),() => { 
  console.log(`emoji status app is running at localhost:${app.get('port')}`); 
});
