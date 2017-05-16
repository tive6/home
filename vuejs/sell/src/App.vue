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
export default {
  components: {
      HeaderView,
      NavView
  }
}
</script>

<style>

</style>
