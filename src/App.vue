<template>
  <div id="app">
    <controls-component
      @arraySource="arraySource($event)"
      @arrayTypeChart="arrayTypeChart($event)"
    />
    <div class="wrapper-change-date">
      <time-list-component />
      <date-picker
        :dateFromSlider="dateFromSlider"
        :initialValueRangeSlider="initialValueRangeSlider"
        @changeDatePicker="changeDatePicker($event)"
      />
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
      :dataChart2d="dataChart2d.length ? dataChart2d : initialDataChart2d"
      @clickByChart2d="clickByChart2d($event)"
    />
  </div>
</template>

<script>

const chart2dData = require('../dataNew');
const chartTimeLineData = require('../chartTimeLineData');
const chartNetworkData = require('../chartNetworkData');
import VueSliderRange from './components/UI/VueRangeSlider/VueRangeSlider';
import TimeListComponent from './components/TimeListComponent/TimeListComponent';
import DatePicker from './components/UI/DatePicker/DatePicker';
import ControlsComponent from './components/ControlsComponent/ControlsComponent';
import MainComponentChart from './components/MainComponentChart/MainComponentChart';
import store from './store';
import moment from 'moment'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
	components: {VueSliderRange, TimeListComponent, DatePicker, ControlsComponent, MainComponentChart},
  store,
	data() {
    return {

    }
  },
  mounted() {
    this.getData();
  },
  computed: {
		...mapState({
			initialValueRangeSlider: state => state.chart.initialValueRangeSlider,
			initialDataRangeSlider: state => state.chart.initialDataRangeSlider,
			initialDataChart2d: state => state.chart.initialDataChart2d,
			typeChart: state => state.chart.typeChart,
			dataChart2d: state => state.chart.dataChart2d,
			dateFromSlider: state => state.chart.dateFromSlider,
		})
  },
  methods: {
		...mapActions('chart', [
			'setInitialChart2dData',
			'filterChart2dData'
		]),
    getData() {
      this.setInitialChart2dData(chart2dData);
    },
		clickByChart2d(event) {
    	console.log(event);
    },
		changeRangeSlider(data) {
			this.$store.commit('chart/setDateFromSlider', data);
			let obj = {
				start: `${data[0]}-01-01`,
				end: `${data[1]}-01-01`
			};
			this.filterChart2dData(obj);
    },
		arraySource(array) {
    	console.log(array);
    },
		arrayTypeChart(array) {
    	const arrayTypes = array.filter(item => item.checked);
    },
		changeDatePicker(obj) {
    	let arrayYears = [];
			let objectData = {
				start: moment(obj.start).format('YYYY-MM-DD'),
				end: moment(obj.end).format('YYYY-MM-DD')
			};
			arrayYears[0] = obj.start.getFullYear();
			arrayYears[1] = obj.end.getFullYear();

			this.$store.commit('chart/changeInitialValueRangeSlider', arrayYears);
			this.filterChart2dData(objectData);
    }
  }
}
</script>

<style lang="scss">
</style>
