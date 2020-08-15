import axios from 'axios'

const localStorageAccessToken = (JSON.parse(localStorage.getItem("user")) || {}).accessToken

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {'Authorization': localStorageAccessToken, 'Content-Type': 'application/json'},
    transformResponse: [...axios.defaults.transformResponse,
        (data)=>{
            if(data && data.statusCode === 401){
                document.dispatchEvent(new Event("unauthorized"))
            }
            return data;
        }]
});

export default instance;

export function setAuthorizationToken(token){
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
}
