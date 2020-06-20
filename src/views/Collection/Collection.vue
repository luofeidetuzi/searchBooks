<template>
<div class="collection">
  <div class="nav">
    <nav-bar>我的收藏</nav-bar>
  </div>
  <div class="content">
    <collection-list></collection-list>
  </div>
</div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import CollectionList from './children/CollectionList'
export default {
  name: 'Collection',
  components: {
    NavBar,
    CollectionList
  }
}
</script>

<style  lang="scss">
.collection{
  .nav{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
  }
  .content{
    margin-top: 50px;
  }
}
</style>
