import axios from 'axios';

const postsApi = axios.create({
    baseURL: '/api'
});

export default postsApi;