/**
 * Created by badou on 2017/5/11.
 */
import {
        ADD,
        DECREMENT
        } from './types.js';

import getters from './getters.js'

const state = {
  count:20
};

const mutations = {
    [ADD](state){
        state.count++;
    },
    [DECREMENT](state){
        state.count--;
    }
};

export default {
    state,
    mutations,
    getters
}
