<template>
  <div class = 'myHead text-white' >
    <nav-bar>
      <template v-slot:default>
        <p>查书</p>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navBar/NavBar'
export default {
  name: 'MyHead',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.myHead{
  p{
    font-weight: 700;
    font-size: 1.5rem;
  }
}
</style>
