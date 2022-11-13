import axios from 'axios'


export const axiosInstance   = axios.create({
    baseURL : "https://dragdropcalc.herokuapp.com/api/"
})  