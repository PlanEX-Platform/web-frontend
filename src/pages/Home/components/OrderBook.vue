<template>
  <div class="">
    <p class="title">Order book</p>
    <b-table
      :data="sellOrders"
      :columns="columns"
      :narrowed="true"
      :row-class="(row, index) => 'is-danger'">
    </b-table>
    <b-table
      :data="buyOrders"
      :columns="columns"
      :narrowed="true"
      :row-class="(row, index) => 'is-success'">
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {field: 'price', label: 'Price', numeric: true},
        {field: 'baba', label: 'BaBa', numeric: true},
        {field: 'eth', label: 'ETH', numeric: true}],
      sellOrders: [{ price: 0.00004789, baba: 111.07512390, eth: 0.00531939 }],
      buyOrders: [{ price: 0.00004736, baba: 41.09797297, eth: 0.00194640 }]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
tr.is-danger {
  background: $danger;
  color: #fff;
}

tr.is-success {
  background: $success;
  color: #fff;
}
</style>
