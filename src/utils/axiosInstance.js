import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.nytimes.com/svc/mostpopular/v2/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
