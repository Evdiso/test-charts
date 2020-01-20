<template>
  <div id="app">
    <p>Выбери тип графика</p>

    <VueSliderRange />



    <div class="controls-charts">
      <button @click="changeType('2d')"
              :style="{backgroundColor: typeChart === '2d' ? 'orange' : '#fff' }"
      >
        Chart 2d
      </button>
      <button @click="changeType('Network')"
              :style="{backgroundColor: typeChart === 'Network' ? 'orange' : '#fff' }"
      >
        Chart Network
      </button>
      <button @click="changeType('TimeLine')"
              :style="{backgroundColor: typeChart === 'TimeLine' ? 'orange' : '#fff' }"
      >
        Chart TimeLine
      </button>
    </div>
    <Chart2d
      v-if="typeChart === '2d'"
      :data="dataChart2d"
      :options="options2d"
      @click="clickByChart2d($event)"
    />
    <NetworkChart
      v-if="typeChart === 'Network'"
      :nodes="nodesNetworkChart"
      :options="optionsNetwork"
      :edges="edgeNetworkChart"
    />
    <TimeLineChart
      v-if="typeChart === 'TimeLine'"
      :data="timeLineData"
      :options="timeLineOptions"
    />
  </div>
</template>

<script>

const json_data = require('../testData');
import moment from 'moment'
import Chart2d from './components/Chart2d/Chart2d'
import NetworkChart from './components/NetworkChart/NetworkChart'
import TimeLineChart from './components/TimeLine/TimeLineChart'
import VueSliderRange from './components/UI/vue-range-slider/VueRangeSlider'
export default {
  name: 'app',
	components: {Chart2d,NetworkChart,TimeLineChart, VueSliderRange},
	data() {
    return {
    	typeChart: '',
      dataChart2d: [],
      groups2d: [
		    { id: 0, content: "group0" },
		    { id: 1, content: "group1" },
		    { id: 2, content: "group2" }
      ],
      options2d: {
				drawPoints: {
					style: 'circle', // square, circle
          size: 10
				},
				shaded: {
					orientation: 'bottom' // top, bottom
				},
				dataAxis: { visible: true },
				sort: true,
				autoResize: true,
				interpolation: true
      },
      nodesNetworkChart: [
				{ id: 1, label: "Node 1" },
				{ id: 2, label: "Node 2" },
				{ id: 3, label: "Node 3" },
				{ id: 4, label: "Node 4" },
				{ id: 5, label: "Node 5" }
			],
      edgeNetworkChart: [
				{ from: 1, to: 3 },
				{ from: 1, to: 2 },
				{ from: 2, to: 4 },
				{ from: 2, to: 5 },
				{ from: 3, to: 3 }
			],
      optionsNetwork: {
				autoResize: true,
				height: '600px',
				width: '100%',
				clickToUse: true
      },
      timeLineData: [
				{ id: 1, content: "A", start: "2019-02-09T04:00:00" },
				{ id: 2, content: "B", start: "2019-02-09T14:00:00" },
				{ id: 3, content: "C", start: "2019-02-09T16:00:00" },
				{ id: 4, content: "D", start: "2019-02-09T17:00:00" },
				{ id: 5, content: "E", start: "2019-02-10T03:00:00" }
			],
      timeLineOptions: {
				editable: true
			}
    }
  },
  mounted() {
    this.getData();

		// const test3 = moment(this.dataChart2d[0].x).valueOf();
		// const test2 = moment(test3).format('YYYY-MM-DD');


  },
  methods: {
    getData() {
      this.dataChart2d = json_data;
    },
		changeType(type) {
    	if (type === this.typeChart) {
    		return
      } else {
    		this.typeChart = type
      }
    },
		clickByChart2d(event) {
    	console.log(event);
    }
  }
}
</script>

<style lang="scss">
  .controls-charts {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      padding: 5px 10px;
      background-color: #ffffff;
      border: 2px solid gray;
      border-radius: 5px;
      font-size: 16px;
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
      &:hover {
        cursor: pointer;
        background-color: azure;
      }
    }
  }
</style>
