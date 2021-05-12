import axios from 'axios';

const options = {
    baseURL: 'https://api.sampleapis.com/futurama'
};

let axiosInstance = axios.create(options);

const getCharacters = () => {
    return axiosInstance.get('/characters'); //promise
};

const getCharacterFullInfo = (id) => {
    return axiosInstance.get('/characters/' + id); //promise
};


const getInventory = () => {
    return axiosInstance.get('/inventory'); //promise
};

const getInventoryFullInfo = (id) => {
    return axiosInstance.get('/inventory/' + id); //promise
};

export {getCharacters, getInventory, getCharacterFullInfo, getInventoryFullInfo};