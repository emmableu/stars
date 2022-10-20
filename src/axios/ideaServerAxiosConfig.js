// First we need to import axios.js
import axios from 'axios';
// import store from "./redux/store"
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL: process.env.REACT_APP_IDEA_SERVER_BASE_URL
});

const handleRequest = async (request) => {
    console.log(request);
    if (request.method === "post") {
    }
    return request;
}

instance.interceptors.request.use(
        handleRequest,
        error => {
            console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



export default instance;

