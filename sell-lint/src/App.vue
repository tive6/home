<template>
    <div id="app">
        <v-header></v-header>
        <div class="tab">
            <div class="tab-item">
                <a v-link="{path:'/goods'}">商品</a>
            </div>
            <div class="tab-item">
                <a v-link="{path:'/ratings'}">评论</a>
            </div>
            <div class="tab-item">
                <a v-link="{path:'/seller'}">商家</a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/header/Header.vue'
export default {
  components: {
    'v-header': Header
  },
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        .tab
            display flex
            width 100%
            line-height 40px
            .tab-item
                flex 1
                text-align center




</style>
