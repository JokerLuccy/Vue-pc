### day02
1.封装axios拦截器
    1.设置公共的请求地址前缀
    2.请求拦截器,添加公共参数
    3.响应拦截器:
        成功:返回成功的Promise,值为成功的数据
        失败:返回失败的Promise,值为失败的原因
2.封装拦截器的基本步骤
    1.const instance = axios.create({
        baseURL:'/api', // 公共的基础路径
        header:{} // 公共的头部文件
    })
    2.设置请求拦截器
        instance.interceptores.request.use(()=>{})