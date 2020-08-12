const setProfile = require('./src/setProfile');
const getTasks = require('./src/getTasks');
const status = require('./src/status');


getTasks().then(({ data }) => {
  setProfile(status.currentEmojiStatus(data.length)).then(d => {
    if (!d.data.ok) console.log(d.data.error);
  }).catch(error => {
    console.log(error.message);
  });
}).catch(error => {
  setProfile(status.errorStatus(error.message));
});
