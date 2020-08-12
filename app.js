const express = require('express');
const app = express();
const port = 3000;

const setProfile = require('./src/setProfile');
const getTasks = require('./src/getTasks');
const status = require('./src/status'); 


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

app.listen(port, () => {
  console.log(`emoji status app listening at http://localhost:${port}`);
});
