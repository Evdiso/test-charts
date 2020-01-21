<template>
  <div ref="chart2d">

  </div>
</template>


<script>
	import vis from 'vis-timeline/dist/vis-timeline-graph2d.min'
	export default {
		name: "Chart2d",
    props: ['data', 'options', 'groups'],
		mounted() {
			if (this.data && this.data.length) {
				let graph = new vis.Graph2d(this.$refs.chart2d, new vis.DataSet(this.data), new vis.DataSet(this.groups), this.options);
				graph.on('click', (event)=>{
					this.$emit('click', event)
				});
      }
		}
	}
</script>

<style scoped>

</style>
