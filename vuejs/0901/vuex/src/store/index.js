/**
 * Created by badou on 2017/5/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions.js'


export default new Vuex.Store({
    modules:{
        mutations
    },
    actions
});