<template>
  <main>
    <Header/>
    <section class="market-view">
      <div class="container">

        <market-info></market-info>

        <main class="main-container">
          <div class="market-left">
            <info-tips></info-tips>
          </div>

          <section class="market-middle">
            <chart></chart>
            <Orders-form/>
          </section>

          <div class="market-right">
            <order-book></order-book>
          </div>
        </main>

      </div>
    </section>

    <section class="section">
      <trading-history></trading-history>
    </section>
    <bottom></bottom>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Bottom from '@/components/Bottom.vue'

import MarketInfo from './components/MarketInfo.vue'
import Chart from './components/Chart.vue'
import OrdersForm from './components/OrdersForm.vue'
import OrderBook from './components/OrderBook.vue'
import InfoTips from './components/InfoTips.vue'
import TradingHistory from './components/TradingHistory.vue'

export default {
  components: {
    Header,
    Bottom,
    MarketInfo,
    Chart,
    OrdersForm,
    OrderBook,
    InfoTips,
    TradingHistory
  },
  mounted () {
    console.log(this.$auth.isAuthenticated())
    console.log(process.browser)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/vars.styl'

.market-view
  padding 3rem 1.5rem
  @media screen and (max-width: 769px)
    padding 1rem 0

.main-container
  display flex
  @media screen and (max-width: 769px)
    display block
    margin-bottom 1rem

  .market-middle
    max-width 800px
    width 100%
    box-shadow $material-shadow
    padding 0
    border 1px solid rgba(0,0,0,0.2)
    margin 0 .725rem
    @media screen and (max-width: 769px)
      width auto
      margin 0

  .market-left
    max-width 200px
    width 30%
  .market-right
    // max-width 320px
</style>
