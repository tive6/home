/**
 * Created by badou on 2017/5/12.
 */
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'

export default [
    {
        path:'*',
        redirect:'/home/'
    },
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
    }

]
