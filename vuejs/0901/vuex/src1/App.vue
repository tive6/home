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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
