<template>
  <div id="app">
    <HeaderView></HeaderView>
    <NavView></NavView>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderView from './components/header/Header.vue'
  import NavView from './components/nav/Nav.vue'

  const ERR_OK = 0;
  export default {
    components: {
      HeaderView,
      NavView
    },
    data:function(){
      return {
        seller:{},
      }
    },
    mounted:function(){
      this.getSeller();
    },
    methods:{
      getSeller:function(){
        var _this = this;
        this.$http.get('/api/seller').then(function(res){
          if(res.data.errno==ERR_OK){
            _this.seller = res.data.data;
            console.log(_this.seller);
          }
        })
      }
    }
  }
</script>

<style>

</style>

