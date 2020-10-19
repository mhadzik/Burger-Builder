import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-aff3e.firebaseio.com/'
})


export default instance;