<template>
  <div id="app">
    <controls-component
      @arraySource="arraySource($event)"
      @arrayTypeChart="arrayTypeChart($event)"
    />
    <div class="wrapper-change-date">
      <time-list-component />
      <date-picker />
    </div>
    <div class="wrapper-range-slider">
      <vue-slider-range
        :valueProps="initialValueRangeSlider"
        :dataSliderProps="initialDataRangeSlider"
        @changeRange="changeRangeSlider($event)"
      />
    </div>
    <main-component-chart
      :typeChart="typeChart"
      :dataChart2d="dataChart2d"
      :timeLineData="timeLineData"
      :nodesNetworkChart="nodesNetworkChart"
      :edgeNetworkChart="edgeNetworkChart"
      @clickByChart2d="clickByChart2d($event)"
    />
  </div>
</template>

<script>

const chart2dData = require('../chart2dData');
const chartTimeLineData = require('../chartTimeLineData');
const chartNetworkData = require('../chartNetworkData');
import VueSliderRange from './components/UI/VueRangeSlider/VueRangeSlider';
import TimeListComponent from './components/TimeListComponent/TimeListComponent';
import DatePicker from './components/UI/DatePicker/DatePicker';
import ControlsComponent from './components/ControlsComponent/ControlsComponent';
import MainComponentChart from './components/MainComponentChart/MainComponentChart'

export default {
  name: 'app',
	components: {VueSliderRange, TimeListComponent, DatePicker, ControlsComponent, MainComponentChart},
	data() {
    return {
			initialValueRangeSlider: [2013,2020],
			initialDataRangeSlider: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    	typeChart: '2d',
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
    },
		arrayTypeChart(array) {
    	const arrayTypes = array.filter(item => item.checked);
    	// this.typeChart = arrayTypes[0].text === 'Диаграмма' ? 'bar' : '';
    }
  }
}
</script>

<style lang="scss">
</style>
