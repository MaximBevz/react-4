import axios from 'axios';

const options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('/users'); //promise
};

const getUser = (id) => {
    return axiosInstance.get('/users' + id); // promise
};

const getPosts = () => {
    return axiosInstance.get('/posts'); //promise
};

const getPost = (id) => {
    return axiosInstance.get('/posts' + id); // promise
};

export {getUsers, getUser, getPost, getPosts};