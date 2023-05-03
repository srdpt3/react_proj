import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fb3238928e42496186ba12f60a181af2'
    }
})