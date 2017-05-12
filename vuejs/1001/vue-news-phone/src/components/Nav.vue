<template>
    <div id="Nav" class="clear">
        <h3>折是Nav</h3>
        <ul>
            <router-link to="/home" tag="li">
                <a href="javascript:">首页</a>
            </router-link>
            <router-link to="/follow" tag="li">
                <a href="javascript:">关注</a>
            </router-link>
            <router-link to="/column" tag="li">
                <a href="javascript:">栏目</a>
            </router-link>
        </ul>
    </div>
</template>

<script>

    export default{};

</script>

<style scoped>

#Nav a{
    display: inline-block;
    width: 33.33%;
    line-height: 35px;
    text-align: center;
    float: left;
}

</style>
