<template>
    <div class="loading-box">
        <h3>{{msg}}</h3>

    </div>
</template>

<script>

    export default{
        data(){
        return {
            msg:'welcome Vue Loading component'
        }
    }
    };
</script>

<style scoped>

    .loading-box{
        color: #269abc;
        font-size: 30px;
        text-shadow: 2px 2px 5px #000;
    }


</style>
