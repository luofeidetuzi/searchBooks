<template>
  <div id="app">
    <div class = "content">
      <router-view/>
    </div>
    <div class = "my-footer">
      <my-nav></my-nav>
    </div>
  </div>
</template>
<script>
import MyNav from './components/footer/MyNav'
export default {
  name: 'app',
  components: {
    MyNav
  }
}
</script>
<style scoped>
#app{
  position: absolute;
  /* 让整个div被撑起来 */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.content{
  flex: 1;
  width: 100%;
  height: calc( 100vh - 50px );
  position: absolute;
}
.my-footer{
  width: 100%;
  position: fixed;
  bottom: -4px;
  z-index: 9;
}
</style>
