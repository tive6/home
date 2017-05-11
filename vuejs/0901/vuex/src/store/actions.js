/**
 * Created by badou on 2017/5/11.
 */
import * as types from './types.js'

export default {
    add:({commit})=>{
        commit(types.ADD);
    },
    decrement:({commit})=>{
        commit(types.DECREMENT);
    },
    odd:({commit,state})=>{
        if(state.mutations.count%2==0){
            commit(types.ADD);
        }
    },
    async:({commit})=>{
        new Promise((resolve)=>{
            setTimeout(function(){
                commit(types.ADD);
            },2000)
        })
    }
}