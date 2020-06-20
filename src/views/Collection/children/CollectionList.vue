<template>
<div class="collection-list">
  <div class="isHave" v-if="isHave">
    <div class="items" v-for="(value, k) in collections" :key="value.id"  >
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
        <template v-slot:tag>
          <div class="btn" @click="cancel(k)">删除</div>
        </template>
      </items>
    </div>
  </div>
  <div class="no" v-else>你现在还没有收藏的图书呢</div>
</div>
</template>

<script>
import Items from '../../Home/children/Items'
export default {
  name: 'CollectionList',
  data () {
    return {
      collections: [],
      bookNames: [],
      indexs: []
    }
  },
  components: {
    Items
  },
  computed: {
    isHave () {
      if (this.collections.length !== 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async getData (data, n) {
      const res = await this.$http.get(`search/${data}`)
      this.collections.push(res.data[n])
    },
    // 取消收藏
    cancel (index) {
      this.$store.commit('delete', [this.bookNames[index], this.indexs[index]])
      this.collections.splice(index, 1)
    }
  },
  created () {
    this.$store.state.collection.forEach(e => {
      this.getData(e[0], e[1])
      this.bookNames.push(e[0])
      this.indexs.push(e[1])
    })
  }
}
</script>

<style lang="scss">
.collection-list{
  .isHave{
    .btn{
      font-size: 1rem;
      height: 2rem;
      line-height: 2rem;
      width: 3rem;
      border-radius: .4rem;
      color: white;
      background-color: orange;
      text-align: center;
    }
  }
  .no{
    width: 100%;
    text-align: center;
    color: rgb(190, 185, 185);
    padding-top: 15px;
  }
}
</style>
