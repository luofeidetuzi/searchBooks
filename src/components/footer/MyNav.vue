<template>
  <div class="myNav bg-white">
    <nav-item link="/home">
        <template v-slot:icon-img>
            <img src="../../assets/image/nav/首页.svg">
        </template>
        <template v-slot:icon-img-active>
            <img src="../../assets/image/nav/首页-选中.svg">
        </template>
        <template v-slot:icon-name>
            首页
        </template>
    </nav-item>
    <nav-item link="/search">
        <template v-slot:icon-img>
            <img src="../../assets/image/nav/搜索.svg">
        </template>
        <template v-slot:icon-img-active>
            <img src="../../assets/image/nav/搜索-选中.svg">
        </template>
        <template v-slot:icon-name>
            搜索
        </template>
    </nav-item>
    <nav-item link="/collection">
        <template v-slot:icon-img>
            <img src="../../assets/image/nav/收藏.svg">
        </template>
        <template v-slot:icon-img-active>
            <img src="../../assets/image/nav/收藏-选中.svg">
        </template>
        <template v-slot:icon-name>
            收藏
        </template>
    </nav-item>
    <nav-item link="/profile">
        <template v-slot:icon-img>
            <img src="../../assets/image/nav/我的.svg">
        </template>
        <template v-slot:icon-img-active>
            <img src="../../assets/image/nav/我的-选中.svg">
        </template>
        <template v-slot:icon-name>
            我的
        </template>
    </nav-item>
  </div>
</template>

<script>
import NavItem from './children/NavItem'
export default {
  name: 'myNav',
  components: {
    NavItem
  }
}
</script>

<style>
.myNav{
    height: 50px;
    display: flex;
    Justify-content: space-around;
    /* border-top: 1px solid white; */
    padding: 10px;
    /* box-shadow:12px 12px 15px #000000 */
}
</style>
