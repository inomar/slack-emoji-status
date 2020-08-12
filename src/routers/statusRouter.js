const express = require('express');
const app = express();
const router = express.Router();

const setProfile = require('../setProfile');
const getTasks = require('../getTasks');
const status = require('../status');

const statusController = {
  getTaskCount: async (req, res, next) => {
    const { data } = await getTasks();
    req.taskCount = data.length;
    next();
  },
  getProjectId: (req, res, next) => {
    const { project_id } = req.body.event_data; 
    if (project_id === Number(process.env.PROJECT_ID)) {
      return next();
    }
    res.json({ message: 'NO REACTION'});
  },
  setStatus: async (req, res, next) => {
    const { taskCount } = req;
    await setProfile(status.currentEmojiStatus(taskCount));
    res.json({ message: 'OK' });
  },
};

router.get('/set_emoji_status', statusController.getTaskCount, statusController.setStatus);
router.post('/set_emoji_status', 
  statusController.getTaskCount,
  statusController.getProjectId,
  statusController.setStatus)

module.exports = router;
