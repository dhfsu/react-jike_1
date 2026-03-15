//axios封装处理
import axios from 'axios';
import { getToken, removeToken } from './main';
import router from '@/router/main'
//1.根域名配置

const request = axios.create({
    baseURL: 'https://geek.itheima.net/v1_0',
    //2.超时时间
    timeout: 5000
})

//3.请求拦截器 // 响应拦截器

// 添加请求拦截器 在请求发送之前作拦截，插入一些自定义的配置 【参数的处理】
request.interceptors.request.use((config)=> {
  const token = getToken()
  if (token){
    config.headers.Authorization = `Bearer ${token}`
  }
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器 在响应回到客户端之前作拦截，重点处理返回的数据
request.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    //监控401 Token失效
    // console.dir(error);
    //这里的401是数字，不是字符串，所以不能加引号
    if(error.response.status === 401){
      removeToken()
      router.navigate('/login')
    }
    return Promise.reject(error)
})

export {request}
