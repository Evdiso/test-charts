<template>
  <div id="app">
    <VueSliderRange
      :valueProps="initialValueRangeSlider"
      :dataSliderProps="initialDataRangeSlider"
      @changeRange="changeRangeSlider($event)"
    />
  </div>
</template>

<script>

const chart2dData = require('../chart2dData');
const chartTimeLineData = require('../chartTimeLineData');
const chartNetworkData = require('../chartNetworkData');
import VueSliderRange from './components/UI/vue-range-slider/VueRangeSlider'
export default {
  name: 'app',
	components: {VueSliderRange},
	data() {
    return {
			initialValueRangeSlider: [2013,2020],
			initialDataRangeSlider: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    	typeChart: '',
      dataChart2d: [],
			timeLineData: [],
      nodesNetworkChart: [],
      edgeNetworkChart: [],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.dataChart2d = chart2dData;
      this.timeLineData = chartTimeLineData;
      this.nodesNetworkChart = chartNetworkData.nodesNetworkChart;
      this.edgeNetworkChart = chartNetworkData.edgeNetworkChart;
    },
		clickByChart2d(event) {
    	console.log(event);
    },
		changeRangeSlider(data) {
    	console.log(data);
    }
  }
}
</script>

<style lang="scss">
</style>
