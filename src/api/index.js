import axios from 'axios';

export const client = axios.create({
    baseURL: "https://62d7f6869088313935880018.mockapi.io/api/v1/catalogue",
});