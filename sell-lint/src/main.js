// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Goods from './components/goods/Goods.vue'

Vue.use(VueRouter)
let app = Vue.extend(App)
const router = new VueRouter()
router.map({
    '/goods': {
        component: Goods
    }
})
router.start(app, '#app')
