<template>
<div class="list">
  <div class="items" v-for="(value,k) in dailyBook" :key="value.id"  @click="toDetail(value.id)">
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
        <img v-if="!value.isCollected" src="../../../assets/image/content/想读.svg" @click.stop="collect(k)">
        <img v-else src="../../../assets/image/content/想读-选中.svg" @click.stop="cancel(k)">
      </template>
    </items>
  </div>
</div>
</template>

<script>
import Items from './Items'
import Rate from '../../../components/common/rate/Rate'
export default {
  name: 'List',
  components: {
    Items,
    Rate
  },
  data () {
    return {
      dailyBook: [],
      dailyName: 'HTML'// 修改每日呈现的系列
    }
  },
  computed: {
    // 评分
    rate () {
      const arr = []
      this.dailyBook.forEach(e => {
        if (e.rating === undefined) {
          arr.push(undefined)
        } else {
          arr.push(e.rating)
        }
      })
      return arr
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
    // 获取数据
    async showDailyBook () {
      const res = await this.$http.get(`search/${this.dailyName}`)
      res.data.forEach((e, i) => { // 在获取数据后增加是否被收藏的字段
        if (this.collected(this.dailyName, i) === -1) {
          e.isCollected = false
        } else {
          e.isCollected = true
        }
      })
      // console.log(res.data)
      this.dailyBook = [...res.data]
    },
    // 点击跳转到书的详细页面，还没做
    toDetail (id) {
      this.$router.push({
        name: 'Detail',
        params: {
          id
        }
      })
      console.log(id)
    },
    // 添加收藏
    collect (index) {
      this.$store.commit('add', [this.dailyName, index])
      // console.log(this.$store.state.collection)
      this.dailyBook[index].isCollected = true
    },
    // 取消收藏
    cancel (index) {
      this.$store.commit('delete', [this.dailyName, index])
      this.dailyBook[index].isCollected = false
    }
  },
  created () {
    this.showDailyBook()
  }
}
</script>

<style>
div[class="items"]:nth-last-child(1){
  margin-bottom: 50px;
}
</style>
