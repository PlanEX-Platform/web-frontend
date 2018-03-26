<template>
  <div class="order-book">
    <div class="order-book_table">
      <div class="last-price">
        <span>{{ lastPrice }}</span>
      </div>
      <b-table
        :data="sellOrders"
        :columns="columns"
        narrowed
        :row-class="(row, index) => 'is-danger'">
      </b-table>
      <b-table
        :data="buyOrders"
        :columns="columns"
        :narrowed="true"
        :row-class="(row, index) => 'is-success'">
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lastPrice: 0.00123300,
      columns: [
        {field: 'price', label: 'Price'},
        {field: 'baba', label: 'BaBa'},
        {field: 'eth', label: 'ETH'}],
      sellOrders: [{ price: 0.00004789, baba: 111.07512390, eth: 0.00531939 }, { price: 0.00004789, baba: 111.07512390, eth: 0.00531939 }, { price: 0.00004789, baba: 111.07512390, eth: 0.00531939 }],
      buyOrders: [{ price: 0.00004736, baba: 41.09797297, eth: 0.00194640 }, { price: 0.00004789, baba: 111.07512390, eth: 0.00531939 }]
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/vars.styl'

.order-book
  &_table
    box-shadow $material-shadow
    border 1px solid rgba(0,0,0,0.2)
  .last-price
    font-size 20px
    line-height 22px
    border-bottom 1px solid rgba(0,0,0,0.2)
    padding .25rem
    text-align center
    font-weight 500
    position relative
</style>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

tbody {
  font-family: 'Arial'
}

tr {
  font-size: 14px
}

tr:hover {
  font-weight: 600;
  cursor: pointer;
}

tr.is-danger {
  color: $danger;
  // color: #fff;
}

tr.is-success {
  color: $success;
  // color: #fff;
}
</style>
