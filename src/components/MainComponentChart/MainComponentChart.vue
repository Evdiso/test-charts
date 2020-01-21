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

      }
    }
	}
</script>

<style scoped>

</style>
