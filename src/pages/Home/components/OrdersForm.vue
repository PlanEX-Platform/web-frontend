<template>
<section class="market-orders_cont">
  <div class="market-orders_column">
    <buy-order></buy-order>
  </div>
  <div class="market-orders_column">
    <sell-order></sell-order>
  </div>
</section>
</template>

<script>
import BuyOrder from './BuyOrder.vue'
import SellOrder from './SellOrder.vue'

export default {
  components: {
    BuyOrder, SellOrder
  }
}
</script>

<style lang="stylus" scoped>
.market-orders
  &_cont
    display flex
    width 100%
    border-top 1px solid rgba(0,0,0,0.2)
  &_column
    display block
    padding 0 1rem
    margin 22px 0
    flex 0 1 100%
</style>

<style lang="stylus">
.order-col
  &_title
    font-weight 500
    font-size 18px
    margin-bottom .25rem
  &_subtitle
    font-size 14px

.order-btn
  width 100%
  color #fff
  border-radius 2px
  transition-property background-color
  transition .2s ease
  &:hover
    color #fff
</style>
