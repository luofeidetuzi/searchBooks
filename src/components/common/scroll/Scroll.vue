<template>
<div ref="wrapper" class="my-scroll">
  <slot></slot>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'Scroll',
  data () {
    return {
      scroll: {},
      scrollY: ''
    }
  },
  mounted () {
    this.initScroll()
  },
  methods: {
    // 1、初始化BScroll对象
    initScroll () {
      if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 2,
        bounce: {
          bottom: true
        }
      })
      // 2.将监听事件回调,不知道为什么没有pos没有值
      this.scroll.on('scroll', pos => {
        this.$emit('scroll', pos)
      })
    },
    // 3、记录之前拉动的位置并拉动到原来的位置
    scrollTo (x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style>

</style>
