import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api"
});

export const getWeatherForCity = () => api.post('/get-wheather')