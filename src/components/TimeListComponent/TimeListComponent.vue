<template>
  <div class="wrapper-time-list">
    <ul class="time-list">
      <li class="time" @click="changeTime('year')">Год</li>
      <li class="time" @click="changeTime('half-year')">Полгода</li>
      <li class="time" @click="changeTime('quarter')">Квартал</li>
      <li class="time" @click="changeTime('month')">Месяц</li>
      <li class="time" @click="changeTime('two-weeks')">2 недели</li>
      <li class="time" @click="changeTime('week')">Неделя</li>
    </ul>
  </div>
</template>

<script>
	export default {
		name: "TimeListComponent",
    methods: {
			changeTime(type) {
				console.log(type)
      }
    }
	}
</script>

<style scoped>

</style>
