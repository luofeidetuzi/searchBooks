<template>
<div class="icon-item" @click="itemClick">
  <div class="icon-img" v-show="!isActive">
    <slot name="icon-img"></slot>
  </div>
  <div class="icon-img-active" v-show="isActive">
    <slot name="icon-img-active"></slot>
  </div>
  <span class="icon-name font-sizes-md" :style="activeStyle">
    <slot name="icon-name"></slot>
  </span>
</div>
</template>

<script>
export default {
  name: 'navItem',
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: '#50bba7' } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.link)
    }
  }
}
</script>

<style lang="scss">
.icon-item{
  width: 32px;
  position: reltive;
  .icon-name{
    position: absolute;
    display: inline-block;
    width: 32px;
    text-align: center;
  }
}
</style>
