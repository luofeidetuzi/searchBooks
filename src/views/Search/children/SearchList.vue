<template>
<div class="search-list">
  <div  v-for="(value,k) in feedback" :key="value.id" class="searchItems"  @click="toDetail(value.id)">
    <items>
      <template v-slot:img>
        <img :src="value.cover_url === undefined ? 'https://img3.doubanio.com/f/shire/5522dd1f5b742d1e1394a17f44d590646b63871d/pics/book-default-lpic.gif' : value.cover_url">
      </template>
      <template v-slot:title>
        {{value.title}}
      </template>
      <template v-slot:content>
        {{value.abstract}}
      </template>
      <template v-slot:rate>
        <rate :k="k" :rate="rate"></rate>
      </template>
      <template v-slot:tag>
        <img v-if="!value.isCollected" src="../../../assets/image/content/想读.svg" @click.stop="$emit('collect', k)">
        <img v-else src="../../../assets/image/content/想读-选中.svg" @click.stop="$emit('cancel', k)">
      </template>
    </items>
  </div>
</div>
</template>

<script>
import Items from '../../Home/children/Items'
import Rate from '../../../components/common/rate/Rate'

export default {
  name: 'SearchList',
  props: {
    feedback: {
      type: Array
    }
  },
  computed: {
    rate () {
      const arr = []
      this.feedback.forEach(e => {
        if (e.rating === undefined) {
          arr.push(undefined)
        } else {
          arr.push(e.rating)
        }
      })
      return arr
    }
  },
  components: {
    Items,
    Rate
  },
  methods: {
    toDetail (id) {
      this.$router.push({
        name: 'Detail',
        params: {
          id
        }
      })
      console.log(id)
    }
  }
}
</script>

<style>
div[class="searchItems"]:nth-last-child(1){
  margin-bottom: 50px;
}
</style>
