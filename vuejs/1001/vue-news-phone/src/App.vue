<template>
    <div id="app">

        <NavView></NavView>
        <router-view></router-view>
        <FooterView></FooterView>


    </div>
</template>

<script>

    import NavView from './components/Nav.vue'
    import FooterView from './components/Footer.vue'

    export default {
        components:{
            NavView,
            FooterView
        },
        mounted:function(){// vue实例完成后，全局触发

        },
        methods:{

        }
    }

</script>

<style>

</style>