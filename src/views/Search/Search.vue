<template>
<div class="search">
  <div class="search-behavior">
    <my-search @submit="show"></my-search>
  </div>
  <div class="search-content">
    <div>
      <search-list :feedback="feedback" @collect="collect" @cancel="cancel"></search-list>
    </div>
  </div>
</div>
</template>

<script>
import MySearch from './children/MySearch'
import SearchList from './children/SearchList'
export default {
  name: 'Search',
  components: {
    MySearch,
    SearchList
  },
  data () {
    return {
      feedback: [],
      info: ''
    }
  },
  methods: {
    // 判断之前有没有被收藏
    collected (name, i) {
      const item = [name, i]
      const index = this.$store.state.collection.findIndex(e => {
        return JSON.stringify(item) === JSON.stringify(e)
      })
      return index
    },
    async show (info) {
      if (info === '') return
      this.info = info
      const res = await this.$http.get(`search/${info}`)
      res.data.forEach((e, i) => { // 在获取数据后增加是否被收藏的字段
        if (this.collected(info, i) === -1) {
          e.isCollected = false
        } else {
          e.isCollected = true
        }
      })
      // console.log(res.data)
      this.feedback = [...res.data]
    },
    collect (index) {
      this.$store.commit('add', [this.info, index])
      this.feedback[index].isCollected = true
    },
    cancel (index) {
      this.$store.commit('delete', [this.info, index])
      this.feedback[index].isCollected = false
    }
  }
}
</script>

<style lang="scss">
.search{
  width: 100%;
  .search-behavior{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
  }
  .search-content{
    margin-top: 50px;
  }
}
</style>
