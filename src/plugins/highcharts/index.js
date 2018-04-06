import Vue from 'vue'
import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts'
import loadStock from 'highcharts/modules/stock'
import boost from 'highcharts/modules/boost'

Highcharts.theme = {
  boost: {
    enabled: true,
    useGPUTranslations: true
  },
  colors: [
    '#424242', '#64dd17'
  ],
  chart: {
    backgroundColor: '',
    style: {
      fontFamily: 'Arial, serif'
    },
    borderWidth: 0,
    borderRadius: 0,
    plotBackgroundColor: null,
    plotShadow: false,
    plotBorderWidth: 0,
    marginRight: 0
  },
  title: {
    style: {
      color: 'black',
      fontSize: '16px',
      fontWeight: 'bold'
    }
  },
  subtitle: {
    style: {
      color: 'black'
    }
  },
  tooltip: {
    borderWidth: 0
  },
  legend: {
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '13px'
    }
  },
  xAxis: {
    labels: {
      style: {
        color: '#6e6e70'
      }
    }
  },
  yAxis: {
    labels: {
      style: {
        color: '#6e6e70'
      }
    }
  },
  plotOptions: {
    series: {
      shadow: false
    },
    map: {
      shadow: false
    }
  },

  // Highstock specific
  navigator: {
    xAxis: {
      gridLineColor: '#D0D0D8'
    }
  },
  rangeSelector: {
    buttonTheme: {
      fill: '#00e676',
      stroke: '#C0C0C8',
      'stroke-width': 1,
      states: {
        select: {
          fill: '#D0D0D8'
        }
      }
    }
  },
  scrollbar: {
    trackBorderColor: '#C0C0C8'
  },

  // General
  background2: '#000'

}

Highcharts.setOptions(Highcharts.theme)

boost(Highcharts)
loadStock(Highcharts)

Vue.use(VueHighcharts, { Highcharts })
