<template>
    <div id="Home">
        <BannerView></BannerView>
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arrList">
                    <router-link :to="'/article/'+item.id">
                        <h2>{{index+1}} . {{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>

    import BannerView from './Banner.vue'

    export default{
        components:{
            BannerView,
        },
        mounted:function(){// vue 实例生成后 触发
            // 获取数据
            this.fetchData();
        },
        data:function(){
            return {
                arrList:[]
            }
        },
        methods:{
            fetchData:function(){
                var _this = this;
                this.$http.get('src/data/index.data').then(function(res){
                    _this.arrList = res.data;
                }).catch(function(err){
                    console.log(err);
                });
            }
        }
    };
</script>

<style>

</style>
