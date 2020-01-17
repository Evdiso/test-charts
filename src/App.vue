<template>
  <div id="app">
    <div ref="cont">

    </div>
  </div>
</template>

<script>

import vis from 'vis-timeline/dist/vis-timeline-graph2d.min'
const json_data = require('../data2');
export default {
  name: 'app',
  data() {
    return {
      dataChart: []
    }
  },
  mounted() {
    this.getData();
    const container = this.$refs.cont;
    const dataset = new vis.DataSet(this.dataChart);
    const options = {
			drawPoints: {
				style: 'circle' // square, circle
			},
			shaded: {
				orientation: 'top' // top, bottom
			},
      dataAxis: { visible: true },
      sort: true,
      autoResize: true,
      interpolation: false
    };
    let graph = new vis.Graph2d(container, dataset, options);
    graph.on('click', (event)=>{
    	console.log(event);
    });
		graph.on('contextmenu', (props)=>{
			console.log(props);
			props.event.preventDefault();
		});
  },
  methods: {
    getData() {
      this.dataChart = json_data;
    }
  }
}
</script>

<style>
</style>
