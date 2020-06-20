<template>
<div class="myRate">
  <span class="sprite" :class="`sprite-${condition}`" ></span>
  <span class="star font-sizes-lg">{{rate[k] === undefined ? '' : rate[k].value}}</span>
  <span class="count font-sizes-md">({{rate[k] === undefined ? '0' : rate[k].count}}人评价)</span>
</div>
</template>

<script>
export default {
  props: {
    k: {
      default: 'Number'
    },
    rate: {
      default: 'Array'
    }
  },
  name: 'Rate',
  computed: {
    condition () {
      let n = 'five'
      if (this.rate[this.k] === undefined) {
        n = 'zero'
        return n
      }
      switch (this.rate[this.k].star_count) {
        case 5: n = 'five'
          break
        case 4.5: n = 'four-half'
          break
        case 4: n = 'four'
          break
        case 3.5: n = 'three-half'
          break
        case 3: n = 'three'
          break
        case 2.5: n = 'two-half'
          break
        case 2: n = 'two'
          break
        case 1.5: n = 'one-half'
          break
        case 1: n = 'one'
          break
        case 0.5: n = 'half'
          break
        case 0: n = 'zero'
          break
      }
      return n
    }
  }
}
</script>

<style lang='scss'>
.myRate{
    display: inline-block;
    position: relative;
    top: 8px;
    left: 5px;
    .star{
      color: #ffac2d;
      padding-left: 2px;
    }
    .count{
      padding-left: 4px;
    }
  }
</style>
