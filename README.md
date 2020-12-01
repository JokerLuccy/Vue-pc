<!--
 * @Author: your name
 * @Date: 2020-11-27 14:13:45
 * @LastEditTime: 2020-12-01 18:25:04
 * @LastEditors: Please set LastEditors
 * @Description: 笔记,重要内容
 * @FilePath: \vue_reception\README.md
-->
### day02
1.封装axios拦截器
    1.设置公共的请求地址前缀
    2.请求拦截器,添加公共参数
    3.响应拦截器:
        成功:返回成功的Promise,值为成功的数据
        失败:返回失败的Promise,值为失败的原因
    4.添加进度实体
        -请求拦截器：NProgress.start()
        -响应拦截器：NProgress.done()
    5.添加错误提示，使用element-ui
        -安装element-ui
            -vue add element(会重写App.vue，注意先备份)
                
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
    4.遍历生成列表,一定要确定数据结构,保证关系对应
        这一拓展出v-for和v-if的优先级问题,v-for的优先级高于v-if
### day03  
    1.如果vuex模块化以后，state中的数据就是样式
        {
            test:[], // 总数据
            home:{ //home组件对应的vuex中的state中的数据
                xxx:{}
            }
            ....
        }
        使用vuex模块化以后，mapState的写法改成 ...mapState({
            xxx: state => state.xxx.yyy
        })
        mapActions和mapMutAtions写法不变
    2.路由跳转的两种方法
        -使用router-link跳转，问题是产生太多的组件，如果页面需要跳转的数据过多，页面性能就会收到影响
        -使用编程式导航跳转，不会产生多个组件，看情况使用
    3.优化事件处理效率：利用时间委托
        利用事件委托，绑定一个点击监听来搞定所有分类项的点击相应
    4.利用标签自定义属性携带动态数据
        获取自定义属性的value e.target.dataset
### day04
    1.轮播图知识点
        -在mounted中 new Swiper,为了保证DOM结构生成在以后在new,确保可以找到DOM元素
        -如果在mounted直接new Swiper ,这时候还没有回去到轮播图所用到的数据,会出现报错,一定要等到轮播图的数据请求回来,在new Swiper
        -await this.getBanners()-->等待vuex将轮播图数据更新完毕,在执行后面的new Swiper
        -更新用户界面都是异步的,所以要等同步全部执行完,再去更新
            解决方式1 定时器
                通过定时器将new Swiper添加宏任务队列,更新用户界面是微任务队列,所以先更新用户界面,目的是获取DOM元素,再new Swiper,
            解决方式2 nextTick()
                this.$nextTick(()=>{})
                Vue.$nextTick(()=>{})
                    当用户界面更新完毕,在触发其中的回调函数
                    将其中的回调函数放到更新完成DOM后在触发
                    其中的回调函数类似于在updated中执行(但是只会执行一次)
        -在swiper-container 最外层定义 ref='swiper'
            这样可以保证轮播图组件使用的都是自己的swiper
