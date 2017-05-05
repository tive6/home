<template>
    <h1>Hello , Vue</h1>
    <h3 @click="change">{{msg}}</h3>
    <!-- Menu -->
    <my-menu></my-menu>
</template>
<style>
    body{
        background: #faf2cc;
    }
</style>
<script>
    import Menu from './components/Menu.vue'
    export default {
        data:function(){
            return {
                msg:'welcome Vue'
            }
        },
        methods:{
            change:function(){
                this.msg = 'Hello Word'
            }
        },
        components:{
            'my-menu':Menu
        }
    }
</script>