import axios from 'axios'

const localStorageAccessToken = (JSON.parse(localStorage.getItem("user")) || {}).accessToken

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {'Authorization': localStorageAccessToken, 'Content-Type': 'application/json'}
});

export default instance;

export function setAuthorizationToken(token){
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
}
