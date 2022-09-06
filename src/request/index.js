import axios from 'axios';

//创建实例
let service = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    baseURL:"http://localhost:3000/",

    timeout:3000,
})



export default service;