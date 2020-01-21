<template>
  <div class="wrapper-slider">
    <vue-slider v-model="value"
                ref="slider"
                :tooltip="'none'"
                :enable-cross="false"
                :height="3"
                :dotSize="[9,9]"
                :dotStyle="dotStyle"
                :processStyle="processStyle"
                :data="dataSlider"
                @change="change($event)"
                :marks="marks">
      <template v-slot:step="{ label, active }">
        <div :class="['custom-step', { active }]"></div>
      </template>
    </vue-slider>
  </div>
</template>

<script>
	import VueSlider from 'vue-slider-component'
	export default {
		name: "VueRangeSlider",
    components: {VueSlider},
    props: {
			valueProps: Array,
			dataSliderProps: Array
    },
    data() {
			return {
				value: [],
				dataSlider: [],
				marks: [],
				dotStyle: {
					backgroundColor: '#fff',
          border: '2px solid #013faa',
          borderRadius: '50%'
        },
				processStyle: {
					backgroundColor: '#013faa',
          height: '9px',
          top: '50%',
					transform: 'translateY(-50%)'
        }
      }
    },
    watch: {
			dataSliderProps() {
				this.dataSlider = this.marks = this.dataSliderProps.map(item => item.toString());
      },
			valueProps() {
				this.value = this.valueProps.map(item => item.toString());
			}
    },
    mounted() {
      if (this.valueProps && this.valueProps.length) {
      	this.value = this.valueProps.map(item => item.toString());
      }
			if (this.dataSliderProps && this.dataSliderProps.length) {
				this.dataSlider = this.marks = this.dataSliderProps.map(item => item.toString());
			}
    },
    methods: {
			change(data) {
				let changeData = data.map(item => parseInt(item));
				this.$emit('changeRange', changeData);
      }
    }
	}
</script>

<style scoped lang="scss">
  @import '~vue-slider-component/theme/default.css';
  .wrapper-slider {
    padding: 5px 15px 25px 15px;
  }
  .custom-step {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #ccc;
    background-color: #ccc;
    &:hover {
      cursor: pointer;
    }
  }
  .custom-step.active {
    box-shadow: 0 0 0 3px #013faa;
    background-color: #013faa;
    &:hover {
      cursor: pointer;
    }
  }
</style>
