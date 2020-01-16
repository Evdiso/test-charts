<template>
  <div id="app">
    <div ref="cont">

    </div>
  </div>
</template>

<script>

import vis from 'vis'
const json_data = require('../data');
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
      drawPoints: false,
      dataAxis: { visible: true },
      sort: true,
      autoResize: true,
      interpolation: true,
      moment: function(date) {
        return vis.moment(date).utc();
      },
      locale: 'nl'
    };
    let graph = new vis.Graph2d(container, dataset, options);
    // let graph2d = new vis.Timeline(container, dataset, options);
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
