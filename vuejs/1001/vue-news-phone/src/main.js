import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'

require('./assets/css/base.css');//全局引入

Vue.use(VueRouter);
console.log(routerConfig);

const router = new VueRouter({
    model:'history',
    routes:routerConfig
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
