<template>
    <div id="news">
        <h3>这是新闻</h3>
        <ul>
            <li v-for="(val,index) in news">{{val}}</li>
        </ul>

    </div>
</template>

<script>

    export default{
        name:'news',
        data(){
        return {
            news:['width','background','height','border','color']
        }
    }
    };
</script>

<style scoped>/*scoped 局域的 样式*/
    li{
        border-bottom: 1px solid #31b0d5;
    }


</style>
