<template>
  <div class="order-col">
    <p class="order-col_title">Buy</p>
    <p class="order-col_subtitle">Lowest Ask <span class="">0.00004779 ETH</span></p>
    <p class="order-col_subtitle">Max amount <span>0.00000000 ETH</span></p>
    <b-field>
      <b-input placeholder="Price"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Amount"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Total"></b-input>
    </b-field>
    <button class="button order-btn buy-order_btn">
      Buy
    </button>
  </div>
</template>

<style lang="stylus" scoped>
.buy-order_btn
  border-color #8bc34a
  background-color #8bc34a
  &:hover
    background-color #85c700
    border-color #85c700
</style>
