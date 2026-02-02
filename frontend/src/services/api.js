import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-blogging-platform-en63.onrender.com/api',
});

export default api;
