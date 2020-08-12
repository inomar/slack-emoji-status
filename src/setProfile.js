const Axios = require('axios');

const TOKEN = process.env.SLACK_TOKEN;

const setProfile = ({ status_text, status_emoji }) => {
  return Axios({
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
      },
    },
  });
};

module.exports = setProfile;
