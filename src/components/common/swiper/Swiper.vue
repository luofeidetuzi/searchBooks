<template>
<div class="my-swiper">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img src="../../../assets/image/swiper/1.jpg"></swiper-slide>
    <swiper-slide><img src="../../../assets/image/swiper/2.jpg"></swiper-slide>
    <swiper-slide><img src="../../../assets/image/swiper/3.jpg"></swiper-slide>
    <swiper-slide><img src="../../../assets/image/swiper/4.jpg"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'mySwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
.my-swiper{
    img{
        width: 100%;
        height: 200px;
    }
}
.swiper-pagination-bullet-active {
    background-color: #8fc7bd;
}
</style>
