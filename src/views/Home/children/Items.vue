<template>
<div class="item">
  <div class="left">
    <slot name="img"><img src="../../../assets/image/common/book-default-lpic.gif"></slot>
  </div>
  <div class="right">
    <span class="title">
      <slot name="title"></slot>
    </span>
    <span class="content text-grey font-sizes-lg">
      <slot name="content"></slot>
    </span>
    <span class="rate">
      <slot name="rate"></slot>
    </span>
  </div>
  <span class="tag">
    <slot name="tag"></slot>
  </span>
</div>
</template>

<script>
export default {
  name: 'Items'
}
</script>

<style lang="scss">
.item{
    width: 100%;
    height: 180px;
    display: flex;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 10px solid rgb(212, 210, 210);
    .left{
      width: 100px;
      height: 145px;
      img{
        width: 100px;
        height: 145px;
      }
    }
    .right{
        padding: 3px;
        width: 220px;
        .title{
            height:2.3rem;
            line-height: 1.1rem;// 行距=(line-height)-(font-size)
            font-size: 1rem;
            margin: 5px;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .content{
            display: block;
            height:3rem;// 如果用px，字体可能只有上半部分
            line-height: 1rem;
            font-size: .8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            margin-top: 15px;
        }
    }
    .tag{
        align-self: flex-end;
    }
}
</style>
