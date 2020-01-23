import moment from 'moment'

export default {
  namespaced: true,
  state: {
    initialValueRangeSlider: [2013,2020],
    initialDataRangeSlider: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    initialDataChart2d: [],
    typeChart: 'line',
    changesDate: null,
    dataChart2d: [],
    dateFromSlider: null
  },
  mutations: {
    setInitialChart2dData(state, payload) {
      state.initialDataChart2d = [...payload];
    },
    changeInitialValueRangeSlider(state, payload) {
      state.initialValueRangeSlider = [...payload];
    },
    setDateFromSlider(state, payload) {
      state.dateFromSlider = [...payload];
    },
    setNewChart2dData(state, payload) {
      state.dataChart2d = [...payload];
    },
    setChangesDate(state, payload) {
      state.changesDate = {...payload}
    },
    setTypeChart(state, payload) {
      state.typeChart = payload
    }
  },
  actions: {
    setInitialChart2dData({commit}, array) {
      commit('setInitialChart2dData', array);
      let newData = array.filter(item => item.group === 1);
      commit('setNewChart2dData', newData)
    },
    setChangesDate({commit}, objectDates) {
      let newObjectDate = {
        firstDate: objectDates.start,
        lastDate: objectDates.end
      };
      commit('setChangesDate', newObjectDate)
    },
    filterChart2dData({commit, state}, arrayId) {
      let newData = [...state.initialDataChart2d];
      if (arrayId.length) {
        newData = newData.filter(item => arrayId.includes(item.group));
      } else {
        newData = [];
      }
      commit('setNewChart2dData', newData)
    }
  }
}
