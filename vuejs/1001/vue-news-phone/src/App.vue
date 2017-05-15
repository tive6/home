<template>
    <div id="app">

        <loading v-show="loading"></loading>
        <NavView v-show="headerShow"></NavView>
        <!-- keep-alive 避免二次加载 -->
        <transition name="sileDown">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
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
    .sileDown-enter-active,
    .sileDown-leave-active{
        transition: .4s all ease;
        opacity: 0.4;
        transform: translate3d(0,6em,0);
    }
    .sileDown-enter,
    .sileDown-enter{
        opacity: 1;
        transform: translate3d(0,6em,0);
    }

</style>