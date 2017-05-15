# vuex

Vuex 是一个专为Vue.js 应用程序开发 的状态管理模式，集中式存储管理应用的所有组件状态。

* 安装

```
npm i vuex -D
```

* 引用

```
import Vuex from 'vuex'
```

* 创建规范的目录和文件

此处vuex所用到的文件主要为`store`中创建的文件

```
index.html
.babelrc
package.json
webpack.config.js
src/
    App.vue             // 主组件
    main.js             // 主入口文件
    components/         // 子组件
    store/              // vuex
        index.js        // store入口文件
        actions.js
        types.js
        mutations.js
        getters.js
```

* index.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import mutations from './mutations.js'
import actions from './actions.js'
export default new Vuex.Store({
    modules:{
        mutations
    },
    actions
});
```

* actions.js

```javascript
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
```

* types.js

```javascript
export const ADD = 'ADD'
export const DECREMENT = 'DECREMENT'
export const ODD = 'ODD';
```

* mutations.js

```javascript
import { ADD, DECREMENT } from './types.js';
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
```

* getters.js

```javascript
export default {
    count:(state)=>{
        return state.count;
    },
    getOdd:(state)=>{
        return state.count%2==0?'偶数':'奇数';
    }
}
```

* main.js

```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
new Vue({
    store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    el: '#app',
    render: h => h(App)
});
```

* App.vue

```javascript
<template>
    <div id="app">
        <h3>welcome Vuex</h3>
        <input type="button" value="增加" @click="add"/>
        <input type="button" value="减少" @click="decrement"/>
        <input type="button" value="偶数才能点击" @click="odd"/>
        <input type="button" value="异步请求" @click="async"/>

        <div class="">
            现在的数字是：{{count}}，它现在是：{{getOdd}}
        </div>

    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        computed:mapGetters([
                'count',
                'getOdd'
        ]),
        methods:mapActions([
                'add',
                'decrement',
                'odd',
                'async'
        ])
    }
</script>
```



