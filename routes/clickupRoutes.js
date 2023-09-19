const express = require('express');
const { testController, fetchTasks } = require('../controllers/clickupController');

const router = express.Router();

router.get('/test', testController);
router.get('/tasks', fetchTasks);

module.exports = router;
