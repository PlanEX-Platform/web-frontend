<template>
  <section class="app-chart">
    <div ref="chart" >
      <highstock :options="options"></highstock>
    </div>
  </section>
</template>

<script>

import chartData from './chartData'

export default {
  data () {
    return {
      options: {
        rangeSelector: {
          buttons: [{
            type: 'minute',
            count: 30,
            text: '30m'
          }, {
            type: 'hour',
            count: 1,
            text: '1h'
          }, {
            type: 'all',
            count: 1,
            text: 'All'
          }],
          selected: 1,
          inputEnabled: false
        },
        plotOptions: {
          candlestick: {
            lineColor: '#000',
            color: '#ff007a',
            upColor: '#64dd17',
            upLineColor: '#000'
          }
        },
        title: {
        },
        scrollbar: {
          enabled: false
        },
        series: [{
          type: 'candlestick',
          name: 'somename',
          data: chartData,

          tooltip: {
            valueDecimals: 2
          }
        }]
      }

    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.app-chart
  position relative
</style>

<style>
.modebar{
  display: none !important;
}
</style>
