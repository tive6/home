/**
 * Created by badou on 2017/5/10.
 */
import Home from './components/Home.vue'
import News from './components/News.vue'

export default {
    routes:[
        {path:'/home',component:Home},
        {path:'/news',component:News},
        {path:'*',redirect:Home}
    ]
}