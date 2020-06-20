<template>
<div class="mySearch">
  <nav-bar>
    <template v-slot:default>
      <input class="in" v-model="info"  @keyup.enter="$emit('submit', info)" placeholder="输入你想要搜索的书名">
      <div class="click-search" @click="$emit('submit', info)">
        搜索
      </div>
    </template>
  </nav-bar>
</div>
</template>

<script>
import NavBar from '../../../components/common/navBar/NavBar'
export default {
  name: 'MySearch',
  components: {
    NavBar
  },
  data () {
    return {
      info: ''
    }
  }
}
</script>

<style lang="scss">
.mySearch{
    .in{
      display: inline-block;
      width:14rem;
      height:1.5rem;
      appearance: none;
      font-size:1rem;
      border-radius:4px;
      border:1px solid #c8cccf;
      color:#6a6f77;
      outline:0;
      padding-left: .4rem;
    }
    .click-search{
      display: inline-block;
      height: 25px;
      width: 50px;
      background-color: orange;
      border-radius: 6px;;
      color: white;
      text-align: center;
      padding-top: 8px;
      margin-left: 2px;
    }
}
</style>
