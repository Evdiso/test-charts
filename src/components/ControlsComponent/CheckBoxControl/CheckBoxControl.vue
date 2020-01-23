<template>
  <div class="wrapper-checkbox"
       @click="change(data.checked)">
    <button :class="{'active': data.checked, 'checkbox': type !== 'radio', 'radio': type === 'radio'}">
    </button>
    <span>
      {{this.data.text}}
    </span>
  </div>
</template>

<script>
	export default {
		name: "CheckBoxControl",
    props: ['data', 'type'],
    data() {
			return {

      }
    },
    methods: {
			change(status) {
				const obj = {
					id: this.data.id,
				  checked: !status
				};
				this.$emit('changeCheckBox', obj);
      }
    }
	}
</script>

<style scoped lang="scss">
  .wrapper-checkbox {
    display: flex;
    align-items: center;
    button {
      margin-right: 5px;
      background-color: #fff;
    }
    &:hover {
      cursor: pointer;
    }
    .checkbox {
      position: relative;
      height: 16px;
      border: 1px solid #ccc;
      &:before {
        content: '⅃';
        position: absolute;
        top: 0px;
        left: 4px;
        color: black;
        transition: .2s;
        transform: rotate(45deg);
        font-size: 11px;
        font-weight: 900;
        opacity: 0;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 1px rgba(1, 63, 170, 1);
      }
      &.active {
        &:before {
          opacity: 1;
        }
      }
    }
    .radio {
      position: relative;
      height: 16px;
      width: 16px;
      border: 1px solid #ccc;
      border-radius: 50%;
      &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        background-color: rgba(1, 63, 170, 1);
        transition: .2s;
        transform: rotate(45deg);
        font-size: 11px;
        font-weight: 900;
        opacity: 0;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 1px rgba(1, 63, 170, 1);
      }
      &.active {
        border: 1px solid rgba(1, 63, 170, 1);
        &:before {
          opacity: 1;
        }
      }
    }
  }
</style>
