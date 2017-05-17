<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="(food,index) in item.foods" class="food-item border-1px">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt=""/>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import './index.styl'

  const ERR_OK = 0;
  export default {
    props:{
      seller:{
        type:Object
      }
    },
    data:function(){
      return {
        goods:[]
      }
    },
    mounted:function(){
      this.getGoods();
      this.classMap=['decrease','discount','guarantee','invoice','special']
    },
    methods:{
      getGoods:function(){
        var _this = this;
        this.$http.get('/api/goods').then(function(res){
          if(res.data.errno==ERR_OK){
            _this.goods = res.data.data;
            console.log(_this.goods);
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
