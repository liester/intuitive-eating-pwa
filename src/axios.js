import axios from 'axios'
const API_URL =process.env.REACT_APP_BASE_URL

const localStorageAccessToken = (JSON.parse(localStorage.getItem("user")) || {}).accessToken

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {'Authorization': localStorageAccessToken, 'Content-Type': 'application/json'}
});

export default instance;
