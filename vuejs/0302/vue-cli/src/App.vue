<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>666</h1>
        <my-menu></my-menu>
    </div>
</template>

<script>
    import Menu from './components/Menu.vue'
    export default {
        name: 'app',
        data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{
        'my-menu':Menu
    },
    }
</script>

<style>
    body{
        background: #faebcc;
    }
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
