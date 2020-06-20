<template>
<div class="navBar bg-primary">
    <!-- <div class="back">
        <slot name="back"><img src="../../../assets/image/common/返 回.svg"></slot>
    </div> -->
    <div class="nav-content">
        <slot></slot>
    </div>
    <div class="nav-search" @click="search">
        <slot name="search"></slot>
    </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    search () {
      this.$router.push('/home/search')
    }
  }
}
</script>

<style lang="scss">
.navBar{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .back{
        margin-left:5px;
    }
    .nav-content{
        color: white;
    }
    .nav-search{
        margin-right:5px;
    }
}
</style>
