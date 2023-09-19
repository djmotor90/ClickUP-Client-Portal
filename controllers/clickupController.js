const axios = require('../client-portal/src/axios/axiosConfig.js');

exports.fetchTasks = async (req, res) => {
  try {
    const response = await axios.get(`/list/${process.env.CLICKUP_LIST_ID}/task`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.testController = (req, res) => {
  res.send('ClickUp controller test successful');
};
