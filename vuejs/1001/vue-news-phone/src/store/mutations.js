/**
 * Created by badou on 2017/5/12.
 */
import getters from './getters.js'

const state = {
    header:false,
    loading:false,
    footer:true
};

const mutations = {
    showHeader(){
        state.header = true
    },
    hideHeader(){
        state.header = false
    },
    showLoading(){
        state.loading = true
    },
    hideLoading(){
        state.loading = false
    },
    showFooter(){
        state.footer = true
    },
    hideFooter(){
        state.footer = false
    },
};

export default {
    state,
    mutations,
    getters
}