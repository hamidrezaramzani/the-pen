import axios from 'axios';
const request = axios.create({
    timeout: 5000,
});


request.interceptors.request.use(config => {
    config.url = "http://localhost:8000/api/v1/" + config.url;
    return config;
});

export default request;