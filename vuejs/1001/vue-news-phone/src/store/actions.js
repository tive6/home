/**
 * Created by badou on 2017/5/12.
 */
export default {
    showHeader:({commit})=>{
        commit('showHeader')
    },
    hideHeader:({commit})=>{
        commit('hideHeader')
    },
    showLoading:({commit})=>{
        commit('showLoading')
    },
    hideLoading:({commit})=>{
        commit('hideLoading')
    },
    showFooter:({commit})=>{
        commit('showFooter')
    },
    hideFooter:({commit})=>{
        commit('hideFooter')
    },
}