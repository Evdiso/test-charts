<template>
  <div class="wrapper-slider">
    <vue-slider v-model="value"
                :enable-cross="false"
                :height="9"
                :dotSize="[9,9]"
                :dotStyle="{backgroundColor: '#013faa'}"
                :processStyle="{backgroundColor: '#013faa', opacity: 1}"
                :data="dataSlider"
                :marks="marks">
    </vue-slider>
  </div>
</template>

<script>
	import VueSlider from 'vue-slider-component'
	export default {
		name: "VueRangeSlider",
    components: {VueSlider},
    data() {
			return {
				value: ['2013','2020'],
				dataSlider: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
				marks: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      }
    }
	}
</script>

<style scoped lang="scss">
  @import '~vue-slider-component/theme/default.css';
  .wrapper-slider {
    .vue-slider-process {
      height: 9px !important;
      background-color: #013faa !important;
    }
  }
</style>
