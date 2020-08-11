const Axios = require('axios');

const TOKEN = process.env.SLACK_TOKEN;

const setProfile = ({ status_text, status_emoji }) => {
  Axios({
    url: 'https://slack.com/api/users.profile.set',
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-type": 'application/json; charset=utf-8'
    },
    data: {
      profile: {
        status_text,
        status_emoji,
      }
    }
  })
  .then(({ data }) => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  });
};

module.exports = setProfile;
