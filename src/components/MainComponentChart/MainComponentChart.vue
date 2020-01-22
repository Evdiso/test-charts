<template>
  <div class="wrapper-main-chart">
    <Chart2d
      v-if="typeChart === '2d' && dataChart2d.length"
      :data="dataChart2d"
      :groups="groups2d"
      :options="options2d"
      @click="clickByChart2d($event)"
    />
<!--    <NetworkChart-->
<!--      v-if="typeChart === 'Network'"-->
<!--      :nodes="nodesNetworkChart"-->
<!--      :options="optionsNetwork"-->
<!--      :edges="edgeNetworkChart"-->
<!--    />-->
<!--    <TimeLineChart-->
<!--      v-if="typeChart === 'TimeLine'"-->
<!--      :data="timeLineData"-->
<!--      :options="timeLineOptions"-->
<!--    />-->
  </div>
</template>

<script>
  import NetworkChart from './NetworkChart/NetworkChart'
  import TimeLineChart from './TimeLine/TimeLineChart'
  import Chart2d from './Chart2d/Chart2d'
	export default {
		name: "MainComponentChart",
    components: {Chart2d, NetworkChart, TimeLineChart},
    props: ['typeChart', 'dataChart2d','timeLineData', 'nodesNetworkChart', 'edgeNetworkChart'],
    data() {
			return {
				groups2d: [
					{ id: 0, content: "Telegram" },
					{ id: 1, content: "VK" },
					{ id: 2, content: "FaceBook" }
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
					zoomable: false,
					moveable: false,
					autoResize: true,
					interpolation: false
				}
      }
    },
    methods: {
			clickByChart2d(event) {
				this.$emit('clickByChart2d', event);
      }
    }
	}
</script>

<style scoped>

</style>
