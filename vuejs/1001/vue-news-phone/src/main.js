/* npm 模块 */
import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

/* 自定义模块 */
import routes from './router.config.js'
import store from './store/index.js'
import Loading from './components/loading/index.js'
import filters from './filters/index.js'

/* 组件模块 */
import App from './App.vue'

/* 自定义 过滤器 导入*/
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));

/* css 模块引入 */
//require('./assets/css/base.css');//全局引入

/* 模块 调用 */
Vue.use(VueRouter);
Vue.use(Loading);

/* 配置参数 */
/*关于 axios 配置*/
axios.interceptors.request.use(function(req){// 发起请求
   store.dispatch('showLoading');
    return req;
},function(err){
    return Promise.reject(err);
});
axios.interceptors.response.use(function(res){// 返回响应
   store.dispatch('hideLoading');
    return res;
},function(err){
    return Promise.reject(err);
});

Vue.prototype.$http = axios;// 将 axios对象 挂在到 Vue 原型上

/*
axios.defaults.baseURL = 'http://localhost:8080/'; // 配置请求根路径
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'; // 配置 post 请求头
 */

const router = new VueRouter({
    mode:'history',
    /*routes:routerConfig*/ // 简写如下
    routes,
    scrollBehavior:()=>({y:0})
});

/* 主程序 入口 渲染 */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
