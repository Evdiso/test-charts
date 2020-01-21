<template>
  <div class="wrapper-controls">

    <div class="source-control">
      <span>Источник данных:</span>
      <ul>
        <li v-for="source in arraySource"
            :key="source.id">
          <check-box-control
            @changeCheckBox="changeSource($event)"
            :data="source"
          />
        </li>
      </ul>
    </div>

    <div class="source-control">
      <span>Тип визуализации:</span>
      <ul>
        <li v-for="chart in arrayTypeChart"
            :key="chart.id">
          <check-box-control
            @changeCheckBox="changeTypeChart($event)"
            :data="chart"
          />
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
  import CheckBoxControl from './CheckBoxControl/CheckBoxControl'
	import uniqid from 'uniqid'
	export default {
		name: "ControlsComponent",
    components: {CheckBoxControl},
    data() {
			return {
        arraySource: [
          {id: uniqid(),text: 'Telegram', checked: true},
					{id: uniqid(), text: 'Facebook', checked: false},
					{id: uniqid(), text: 'Вконтакте', checked: false},
          {id: uniqid(), text: 'Одноклассники', checked: false}
        ],
				arrayTypeChart: [
					{id: uniqid(), text: 'График', checked: true},
					{id: uniqid(), text: 'Диаграмма', checked: false}
				]
      }
    },
    methods: {
			changeSource({id, checked}) {
				this.arraySource.forEach(item => item.id === id ? item.checked = checked : null);
				this.$emit('arraySource', this.arraySource);
      },
			changeTypeChart({id, checked}) {
				this.arrayTypeChart.forEach(item => item.id === id ? item.checked = checked : item.checked = !checked);
				this.$emit('arrayTypeChart', this.arrayTypeChart);
      }
    }
	}
</script>

<style scoped>

</style>
