import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8'
  })
  //请求拦截器
  // instance.interceptors.request.use(config=>{
  //   loadingInstance=Loading.service(options);
  //   //在某些请求（比如登录，需要传入token），必须携带特殊信息
  //   config.headers.Authorization=window.sessionStorage.getItem('token')
  //   return config
  // })
  //响应拦截器
  // instance.interceptors.response.use(config=>{
  //   loadingInstance.close()
  //   return config
  // })
  return instance(config)
}