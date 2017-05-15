/**
 * Created by badou on 2017/5/12.
 */
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import User from './components/User.vue'
import Article from './components/Article.vue'

export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/follow',
        component:Follow
    },
    {
        path:'/column',
        component:Column
    },{
        path:'/user',
        component:User
    },
    {
        path:'/article/:id',
        component:Article
    },
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'*',
        redirect:'/home'
    },
]
