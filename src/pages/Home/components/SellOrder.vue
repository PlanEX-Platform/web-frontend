<template>
  <div class="order-col">
    <p class="order-col_title">Sell</p>
    <p class="order-col_subtitle">Lowest Ask <a href="#">0.00004735 ETH</a></p>
    <p class="order-col_subtitle">Max amount <a href="#">0.00000000 ETH</a></p>
    <b-field>
      <b-input placeholder="Price"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Amount"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Total"></b-input>
    </b-field>
    <b-field>
      <p class="control">
        <button class="button order-btn sell-order_btn">
          Sell
        </button>
      </p>
    </b-field>
  </div>
</template>

<style lang="stylus" scoped>
.sell-order_btn
  border-color #ea0070
  background-color #ea0070
  &:hover
    background-color #ff007a
    border-color #ff007a
</style>
