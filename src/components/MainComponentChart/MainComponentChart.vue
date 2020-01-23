<template>
  <div class="wrapper-main-chart">
    <Chart2d
      v-if="dataChart2d.length"
      :data="dataChart2d"
      :groups="groups2d"
      :options="options2d"
      @click="clickByChart2d($event)"
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
    props: ['dataChart2d'],
    data() {
			return {
				type: 0,
				groups2d: [
					{ id: "Telegram",
            content: "Telegram"
          },
					{ id:"VK",
            content: "VK"
          },
					{ id: "FaceBook",
            content: "FaceBook"
					}
				],
				options2d: {
					defaultGroup: '',
					drawPoints: {
						style: 'circle', // square, circle
						size: 10
					},
          legend: true,
					shaded: {
						orientation: 'bottom' // top, bottom
					},
					dataAxis: { visible: true },
					sort: true,
					zoomable: true,
					moveable: true,
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
