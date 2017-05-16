<template>
  <div class="header">
    <h3>Header</h3>
  </div>
</template>

<script>

  const ERR_OK = 0;

  export default {
    data:function(){
      return {
        seller:{}
      }
    },
    mounted:function(){
      this.$http.get('/api/seller').then(function(res){
        res = res.body;
        if(res.errno==ERR_OK){
          this.seller = res.data;
          console.log(this.seller)
        }
      })
    },
    methods:{
      getSeller:function(){
        var _this = this;
        /*this.$http.get('/api/goods').then((res)=>{
          _this.seller = res.body;
          if(res.errno==ERR_OK){
            return _this.seller
          }
        })*/
      }
    }
  }
</script>

<style>

</style>
