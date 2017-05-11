/**
 * Created by badou on 2017/5/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    count:10
};
const mutations = {
    add(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    }
};

// 定义对象
const actions = {
    add:({commit})=>{
        commit('add')
    },
    decrement:({commit})=>{
        commit('decrement');
    },
    odd:({commit,state})=>{// { commit,state }参数
        if(state.count%2==0){
            commit('add');
        }
    },
    async:({commit})=>{
        new Promise((resolve)=>{
            setTimeout(function(){
                commit('add');
                resolve();
            },1000)
        })
    }
};

const getters = {
    count(state){
        return state.count;
    },
    getOdd(state){
        return state.count%2==0?'偶数':'奇数';
    }
};

// 导出对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
