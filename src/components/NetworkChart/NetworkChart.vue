<template>
  <div ref="networkChart">

  </div>
</template>

<script>
	import vis from 'vis-network/dist/vis-network.min'
	export default {
		name: "NetworkChart",
    props: ['nodes', 'edges', 'options'],
    mounted() {
			let nodes = new vis.DataSet(this.nodes);
			let edges = new vis.DataSet(this.edges);
			let data = {
				nodes: nodes,
				edges: edges
			};
			let network = new vis.Network(this.$refs.networkChart, data, this.options);
		}
	}
</script>

<style scoped>

</style>
