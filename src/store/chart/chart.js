import moment from 'moment'

export default {
  namespaced: true,
  state: {
    initialValueRangeSlider: [2013,2020],
    initialDataRangeSlider: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    initialDataChart2d: [],
    typeChart: '2d',
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
    }
  },
  actions: {
    setInitialChart2dData({commit}, array) {
      commit('setInitialChart2dData', array);
    },
    filterChart2dData({commit, state}, objectDates) {
      let chart2dDataCopy = [...state.initialDataChart2d];
      const firstDate = objectDates.start;
      const lastDate = objectDates.end;
      chart2dDataCopy = chart2dDataCopy.filter(item => moment(item.x).isSameOrBefore(lastDate) && moment(item.x).isSameOrAfter(firstDate));
      commit('setNewChart2dData', chart2dDataCopy);
    }

  }
}
