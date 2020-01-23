<template>
  <div id="app">
    <controls-component
      @arraySource="arraySource($event)"
      @arrayTypeChart="arrayTypeChart($event)"
    />
    <div class="wrapper-change-date">
      <time-list-component
        @changeTime="changeTime($event)"
      />
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
      :dataChart2d="dataChart2d.length ? dataChart2d : initialDataChart2d"
      @clickByChart2d="clickByChart2d($event)"
    />
  </div>
</template>

<script>

const chart2dData = require('../dataNew');
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
			'filterChart2dData',
      'setChangesDate'
		]),
		changeTime(type) {
			//   Выбор периода (год, полгода, квартал, месяц, 2 недели, неделя)
      let objDates = {
      	start: '',
        end: moment().format('YYYY-MM-DD')
      };
      let arrayYears = [new Date().getFullYear(), new Date().getFullYear()];
			this.$store.commit('chart/changeInitialValueRangeSlider', arrayYears);

      switch (type) {
        case 'year':
					objDates.start = moment(objDates.end).subtract(1, 'years').format('YYYY-MM-DD');
					this.setChangesDate(objDates);
					break;
        case 'half-year':
					objDates.start = moment(objDates.end).subtract(6, 'months').format('YYYY-MM-DD');
					this.setChangesDate(objDates);
        	break;
        case 'quarter':
					objDates.start = moment(objDates.end).subtract(3, 'months').format('YYYY-MM-DD');
					this.setChangesDate(objDates);
					break;
        case 'month':
					objDates.start = moment(objDates.end).subtract(1, 'months').format('YYYY-MM-DD');
					this.setChangesDate(objDates);
					break;
        case 'two-weeks':
					objDates.start = moment(objDates.end).subtract(14, 'days').format('YYYY-MM-DD');
					this.setChangesDate(objDates);
					break;
        case 'week':
					objDates.start = moment(objDates.end).subtract(7, 'days').format('YYYY-MM-DD');
					this.setChangesDate(objDates);
					break;
        default:
        	break;
			}
    },
    getData() {
			//   Получение начальных данных для графика
      let array = [...chart2dData];
      array = array.map(item => {
      	let obj = {
					x: item.x,
          y: item.y,
          label: {
						content: item.y,
            className: 'custom-label'
          },
          group: item.group
        };
      	return obj
      });

      this.setInitialChart2dData(array);
    },
		clickByChart2d(event) {
			//   Событие клика с графика
    	console.log(event);
    },
		changeRangeSlider(data) {
			//   Изменение интервала времени от слайдера
			this.$store.commit('chart/setDateFromSlider', data);
			let obj = {
				start: `${data[0]}-01-01`,
				end: `${data[1]}-01-01`
			};
			this.setChangesDate(obj);
    },
		arraySource(array) {
			let newArray = [...array];
			newArray = newArray.map(item => item.checked === true ? item.id : null).filter(item => item !== null);
			this.filterChart2dData(newArray);
    },
		arrayTypeChart(array) {
			//   Изменение типа графика
    	const arrayTypes = array.filter(item => item.checked);
    	let type = arrayTypes[0].text === 'График' ? 'line' : 'bar';
			this.$store.commit('chart/setTypeChart', type);
    },
		changeDatePicker(obj) {
			//   Изменение интервала времени от датапикера
    	let arrayYears = [];
			arrayYears.push(obj.start.getFullYear());
			arrayYears.push(obj.end.getFullYear());

			let objectData = {
				start: moment(obj.start).format('YYYY-MM-DD'),
				end: moment(obj.end).format('YYYY-MM-DD')
			};

			this.$store.commit('chart/changeInitialValueRangeSlider', arrayYears);
			this.setChangesDate(objectData);
    }
  }
}
</script>

<style lang="scss">
</style>
