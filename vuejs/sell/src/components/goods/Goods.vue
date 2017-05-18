<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" :class="{'current':currentIndex==index}" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list food-list-hook">
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

  import BScroll from 'better-scroll'
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
        goods:[],
        listHeight:[],
        scrollY:0
      }
    },
    computed:{
      currentIndex:function(){
        for(let i=0;i<this.listHeight.length;i++){
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1];
          if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
            return i
          }
        }
        return 0;
      }
    },
    mounted:function(){
      this.classMap=['decrease','discount','guarantee','invoice','special']

      var _this = this;
      this.$http.get('/api/goods').then(function(res){
        if(res.data.errno==ERR_OK){
          _this.goods = res.data.data;
          _this.$nextTick(()=>{
            _this._initScroll();
            _this._calculateHeight();
          })
          console.log(_this.goods);
        }
      })

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
      },
      _initScroll:function(){
        this.menuScroll = new BScroll(this.$refs.menuWrapper,{});

        this.foodsSrcroll = new BScroll(this.$refs.foodsWrapper,{
          probeType:3
        });
        this.foodsSrcroll.on('scroll',(pos)=>{
          this.scrollY = Math.abs(Math.round(pos.y));
        })
      },
      _calculateHeight:function(){
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for(let i=0;i<foodList.length;i++){
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }

      }
    }
  }
</script>

<style scoped>

</style>
