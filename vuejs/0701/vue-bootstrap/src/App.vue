<template>
  <div id="app">
      <div class="container">
          <button class="btn btn-default">按钮</button>
          <button class="btn btn-danger">按钮</button>

          <div class="row">
              <div class="col-sm-6 col-xs-12 border">5</div>
              <div class="col-sm-6 col-xs-12 border">5</div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.border{
    border: 1px solid #d9534f;
}

</style>
