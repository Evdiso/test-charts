<template>
  <div>
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
  import NetworkChart from './NetworkChart/NetworkChart'
  import TimeLineChart from './TimeLine/TimeLineChart'
  import Chart2d from './Chart2d/Chart2d'
	export default {
		name: "MainComponentChart",
    components: {Chart2d, NetworkChart, TimeLineChart},
    props: {
			typeChart: 'string'
    },
    data() {
			return {
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
				optionsNetwork: {
					autoResize: true,
					height: '600px',
					width: '100%',
					clickToUse: true
				},
				timeLineOptions: {
					editable: true
				}
      }
    }
	}
</script>

<style scoped>

</style>
