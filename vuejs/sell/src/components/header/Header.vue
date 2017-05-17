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
            <div class="support-count" v-if="seller.supports">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
            <div class="bulletin-wrapper"></div>
        </div>
    </div>
</template>
<script>
    import "./index.styl";
    const ERR_OK = 0;

    export default {
        data:function(){
            return {
                seller:{},
                w:'64px'
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
                        console.log(_this.seller);
                        console.log(Object.keys(res.data.data))
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
