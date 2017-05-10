<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{msg}}</h1>
        <ul>
            <li><router-link to="/home">主页</router-link></li>
            <li><router-link to="/news">新闻</router-link></li>
        </ul>
        <div>
            <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
                <router-view class="animated"></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
    }
</script>

<style>
    html,body{
        overflow: hidden;
    }
    /**{
        margin: 0;
        padding: 0;
    }*/
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
