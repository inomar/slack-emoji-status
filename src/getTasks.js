const Axios = require('axios');

const TASK_TOKEN = process.env.TODIST_TOKEN;
const PROJECT_ID = process.env.PROJECT_ID;

const getTasks = () => {
  return Axios({
    url: 'https://api.todoist.com/rest/v1/tasks',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${TASK_TOKEN}`,
      "Content-type": 'application/json',
    },
    params: {
      project_id: PROJECT_ID,
    }
  });
};

module.exports = getTasks;