<template>
  <header class="market-info_cont">
    <div class="market-info_title">
      <p class="pair">
        <span class="pair_main">ETH</span> / <span class="pair_sec">Baba</span>
      </p>
    </div>
    <div class="para-info">
      <div class="para-info_block">
        <p class="st">Last price</p>
        <p class="val">1.56 <span>0.55$</span></p>
      </div>
      <div class="para-info_block">
        <p class="st">Volume</p>
        <p class=""><b>200 ETH</b></p>
      </div>
      <div class="para-info_block">
        <p class="st">24h Change</p>
        <p class=""><b> -0.00000834</b> <span> -5%</span></p>
      </div>
      <div class="para-info_block">
        <p class="st">24h High</p>
        <p class=""><b> 0.00002834</b></p>
      </div>
      <div class="para-info_block">
        <p class="st">24h Low</p>
        <p class=""><b> 0.00000834</b></p>
      </div>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
@import '~@/styles/vars.styl'

.market-info
  &_cont
    display flex
    position relative
    margin-bottom .5rem
    @media screen and (max-width: 769px)
      flex-flow column wrap
  &_title
    align-self center
    text-align center
    width 19%
    @media screen and (max-width: 769px)
      margin-bottom 1rem
      width 100%
      text-align center
    .pair
      &_sec
        color #999
        font-size 18px
      &_main
        color #333
        font-size 24px
        font-weight bold
  b
    color #666

.para-info
  display inline-flex
  width 100%
  @media screen and (max-width: 769px)
    flex-flow row wrap
  &_block
    margin-right 2rem
    @media screen and (max-width: 769px)
      width 25%
      margin 0 1rem
    &:last-child
      margin 0
    > .st
      color #999
      font-size 16px
    > .val
      font-weight 500
      color #ea0070
      span
        color #666

</style>
