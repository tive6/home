<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :width="w" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name" v-text="seller.name"></span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text" v-text="seller.supports[0].description"></span>
        </div>
      </div>
      <div @click="showDetail" class="support-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div @click="showDetail" class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="header-bg">
      <img :src="seller.avatar" width="100%" height="100%"/>
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <Star :size="48" :score="seller.score"></Star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li v-for="(item,index) in seller.supports" class="support-item">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div @click="showDetail" class="detail-close">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import "./index.styl";
  import Star from '../../components/star/Star.vue'
  const ERR_OK = 0;

  export default {
    data:function(){
      return {
        seller:{},
        w:'64px',
        detailShow:false
      }
    },
    mounted:function(){
      this.getSeller();
      this.classMap=['decrease','discount','guarantee','invoice','special']
    },
    methods:{
      getSeller:function(){
        var _this = this;
        this.$http.get('/api/seller').then(function(res){
          if(res.data.errno==ERR_OK){
            _this.seller = res.data.data;
          }
        })
      },
      showDetail:function(){
        this.detailShow = !this.detailShow
      }
    },
    components:{
      Star:Star
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active{
    transition: .5s all ease;
    opacity: 0.4;
  }
  .fade-enter,
  .fade-leave{
    opacity: 1;
  }
</style>

