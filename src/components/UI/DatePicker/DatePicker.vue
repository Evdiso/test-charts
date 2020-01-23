<template>
  <div>
    <v-date-picker
      mode='range'
      v-model=range
      class="wrapper-input"
      :popover="{ placement: 'bottom', visibility: 'click' }"
      :input-props='{ placeholder: "дд.мм.гггг - дд.мм.гггг"}'>
      <input class="vc-custom-styles"
             slot-scope="{inputProps, inputEvents}"
             v-bind="inputProps"
             v-on="inputEvents">
    </v-date-picker>
  </div>

</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: "DatePicker",
    props: ['dateFromSlider', 'initialValueRangeSlider'],
    data() {
			return {
				range: {
					start: null,
					end: null
        }
      }
    },
		computed: {
			...mapState({
				changesDateOut: state => state.chart.changesDate
			})
		},
    mounted() {
			let object = {
				start: new Date(),
				end: new Date()
			};

			object.start.setFullYear(+this.initialValueRangeSlider[0]);
			object.end.setFullYear(+this.initialValueRangeSlider[1]);

			this.range = {...object};
    },
    watch: {
			range() {
				let obj = {
					start: this.range.start,
					end: this.range.end
        };
				this.$emit('changeDatePicker', obj);
      },
			dateFromSlider() {
				this.changeDate(this.dateFromSlider)
      }
    },
		methods: {
			changeDate(array) {
				let object = {
					start: this.range.start,
					end: this.range.end
				};
				object.start.setFullYear(+array[0]);
				object.end.setFullYear(+array[1]);
				this.range = {...object};
			}
		}
	}
</script>

<style scoped lang="scss">

  .vc-custom-styles {
    background-color: #f3f7f9;
    border-width: 1px;
    border-color: rgb(229, 229, 229);
    border-style: solid;
    border-radius: 15px;
    background-image: -moz-linear-gradient( -90deg, rgb(193,227,241) 0%, rgba(193,231,241,0.50196) 100%);
    background-image: -webkit-linear-gradient( -90deg, rgb(193,227,241) 0%, rgba(193,231,241,0.50196) 100%);
    background-image: -ms-linear-gradient( -90deg, rgb(193,227,241) 0%, rgba(193,231,241,0.50196) 100%);
    font-size: 12px;
    font-family: inherit;
    color: rgb(46, 51, 60);
    line-height: 1.5;
    text-align: right;
    padding: 3px 10px 3px 25px;
    position: relative;
    width: 135px;
    &:focus {
      outline: none;
      box-shadow: 0 0 1px rgb(110, 131, 141);
    }
    &:hover {
      cursor: pointer;
    }
  }
  .wrapper-input {
    position: relative;
    &::before {
      position: absolute;
      top: 0px;
      left: 10px;
      content: url("../../../img/iconInput.svg");
      width: 9px;
      height: 9px;
      z-index: 10;
    }
  }
</style>
