<template>
  <div>
    <top></top>
    <section class="section">
      <div class="container">
      <div class="columns">
        <div class="column is-2">
          <market-info></market-info>
          <info-tips></info-tips>
        </div>
        <div class="column">
          <chart></chart>
        </div>
        <div class="column is-3">
          <order-book></order-book>
        </div>
      </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-half">
          <buy-order></buy-order>
        </div>
        <div class="column is-half">
          <sell-order></sell-order>
        </div>
      </div>
    </section>
    <section class="section">
      <trading-history></trading-history>
    </section>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Bottom from '@/components/Bottom.vue'
import MarketInfo from '@/components/MarketInfo.vue'
import Chart from '@/components/Chart.vue'
import OrderBook from '@/components/OrderBook.vue'
import InfoTips from '@/components/InfoTips.vue'
import BuyOrder from '@/components/BuyOrder.vue'
import SellOrder from '@/components/SellOrder.vue'
import TradingHistory from '@/components/TradingHistory.vue'
export default {
  components: {
    Top,
    Bottom,
    MarketInfo,
    Chart,
    OrderBook,
    InfoTips,
    BuyOrder,
    SellOrder,
    TradingHistory
  }
}
</script>
