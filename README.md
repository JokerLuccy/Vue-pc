<!--
 * @Author: your name
 * @Date: 2020-11-27 14:13:45
 * @LastEditTime: 2020-11-28 16:25:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\README.md
-->
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
        instance.interceptores.request.use((config)=>{
            // config 请求的配置对象
            // 将来发送请求(请求地址,请求参数,请求方式等) 都会在config中找
            // 修改config ,用来添加公共的请求参数
                
            return config
            
            })
    3.设置响应拦截器
        instance.interceptors.response.use({
            (response) => {
                // response的数据结构
                    {
                        headers:{},
                        status:{},
                        request:{},
                        data:{} // 响应的数据
                    }
            }
            (error) => {
                return Promise.reject()
            }
        })
        