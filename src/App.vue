<template>
  <div id="app">

  </div>
</template>

<script>

  import data from '../data'
export default {
  name: 'app',
  data() {
    return {
      dataChart: []
    }
  },
  mounted() {
    this.data = [...data];
    console.log(this.data);
  }
}
</script>

<style>
</style>
