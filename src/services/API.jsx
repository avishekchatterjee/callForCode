import axios from 'axios';

const API = axios.create({
    baseURL: 'https://cfc2020apis.azurewebsites.net/'
});

export default API;