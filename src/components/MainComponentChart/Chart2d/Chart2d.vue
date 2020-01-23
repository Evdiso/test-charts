<template>
  <div ref="chart2d">
  </div>

</template>


<script>
	import { mapState } from 'vuex'
	import vis from 'vis-timeline/dist/vis-timeline-graph2d.min'
	export default {
		name: "Chart2d",
    props: ['data', 'options', 'groups'],
    data() {
			return {
        graph: null
      }
    },
		computed: {
			...mapState({
				changesDate: state => state.chart.changesDate,
				typeChart: state => state.chart.typeChart,
				dataChart2d: state => state.chart.dataChart2d,

			})
		},
    watch: {
			changesDate() {
				this.graph.setWindow(this.changesDate.firstDate, this.changesDate.lastDate);
      },
			typeChart() {
				let options = {...this.options};
				options.style = this.typeChart;
				this.graph.setOptions(options)
      },
			dataChart2d() {
				let newData = new vis.DataSet(this.dataChart2d);
				this.graph.setItems(newData)
      }
    },
		mounted() {
			this.graph = new vis.Graph2d(this.$refs.chart2d, new vis.DataSet(this.data), this.options);
			this.graph.setWindow(this.changesDate.firstDate, this.changesDate.lastDate);

			this.graph.on('click', (event)=>{
				this.$emit('click', event)
			});
		}
	}
</script>

<style scoped>

</style>
