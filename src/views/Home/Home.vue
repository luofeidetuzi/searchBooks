<template>
  <div class="home">
    <div class = "my-header">
      <my-header></my-header>
    </div>
    <div class="home-content">
      <scroll class="scoll" @scroll="contentScroll">
        <div>
          <div class="swiper">
            <swiper></swiper>
          </div>
          <div class="recommend">每日推书</div>
          <div class="home-list">
            <list></list>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import MyHeader from './children/MyHeader'
import Swiper from '../../components/common/swiper/Swiper'
import List from '../Home/children/List'
import Scroll from '../../components/common/scroll/Scroll'

export default {
  name: 'Home',
  components: {
    MyHeader,
    Swiper,
    List,
    Scroll
  },
  data () {
    return {
      scrollY: ''
    }
  },
  // 以下部分还未完成
  methods: {
    contentScroll (pos) {
      this.scrollY = pos
    }
  },
  beforeRouteLeave (to, from, next) {
    // ...
    next()
  }
}
</script>
<style>
.home{
  position: relative;
}
.recommend{
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  font-size: 1rem;
  font-weight:600;
  background-color: #8fc7bd;
}
.my-header{
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 9;
}
.swiper{
  width: 100%;
  height: 200px ;
  margin-top: 50px;
}
.scoll{
  height: calc( 100vh - 50px - 50px);
}
.home-list{
  width: 100%;
  /* z-index: 9; */
}
</style>
