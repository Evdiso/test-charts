<template>
  <div ref="chart2d"></div>
</template>


<script>
	import vis from 'vis-timeline/dist/vis-timeline-graph2d.min'
	export default {
		name: "Chart2d",
    props: ['data', 'options', 'groups'],
    data() {
			return {
        graph: null
      }
    },
    watch: {
			data() {
				// this.graph.setWindow('2019-01-01', '2020-01-01')
				this.graph.destroy();
				this.graph = new vis.Graph2d(this.$refs.chart2d, new vis.DataSet(this.data), new vis.DataSet(this.groups), this.options);
				this.graph.on('click', (event)=>{
					this.$emit('click', event)
				});
      }
    },
		mounted() {
			this.graph = new vis.Graph2d(this.$refs.chart2d, new vis.DataSet(this.data), new vis.DataSet(this.groups), this.options);
			this.graph.on('click', (event)=>{
				this.$emit('click', event)
			});
		}
	}
</script>

<style scoped>

</style>
