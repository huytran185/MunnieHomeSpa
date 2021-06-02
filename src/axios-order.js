import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://munnie-default-rtdb.firebaseio.com/'
});

export default instance;