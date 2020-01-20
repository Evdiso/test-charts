<template>
  <div ref="TimeLine">

  </div>
</template>

<script>
	import vis from 'vis-timeline/dist/vis-timeline-graph2d.min'
	export default {
		name: "TimeLineChart",
    props: ['data', 'options'],
		mounted() {
			if (this.data && this.data.length) {
				let graph = new vis.Timeline(this.$refs.TimeLine, new vis.DataSet(this.data), this.options);
			}
		}
	}
</script>

<style scoped>

</style>
