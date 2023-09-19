import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.clickup.com/api/v2',
  headers: {
    'Authorization': process.env.REACT_APP_CLICKUP_API_KEY,
  },
});

export default axiosInstance;
