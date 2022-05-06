import axios from 'axios';

const blogsApi = axios.create({
    baseURL: '/api'
});

export default blogsApi;