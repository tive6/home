<template>
    <div id="app">

        <loading v-show="loading"></loading>
        <NavView v-show="headerShow"></NavView>
        <!-- keep-alive 避免二次加载 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <FooterView v-show="hideFooter"></FooterView>


    </div>
</template>

<script>

    import NavView from './components/Nav.vue'
    import FooterView from './components/Footer.vue'

    import {mapGetters,mapActions} from 'Vuex'

    export default {
        computed:mapGetters([
            'headerShow',
            'loading',
            'hideFooter'
        ]),
        watch:{// 监听路由变化
            $route:function(to,from){
                if(to.path=='/user'){
                    this.$store.dispatch('hideHeader')
                }else{
                    this.$store.dispatch('showHeader')
                }
            }
        },
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