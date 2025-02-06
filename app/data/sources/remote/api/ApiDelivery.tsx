import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.73.249:8085/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export {ApiDelivery};