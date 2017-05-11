/**
 * Created by badou on 2017/5/11.
 */
import LoadingComponent from './Loading.vue'

const Loading = {
    install:function(Vue){
        Vue.component('loading',LoadingComponent)
    }
};

export default Loading;