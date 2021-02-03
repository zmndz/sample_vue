import Vue from 'vue'
import Vuex from 'vuex'
import { execute } from "@/utils/publicScripts"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbols: {

    },
    symbolIndicator: {
      rsi: {
        type: 'RSI',
        data: null,
        label: 'RSI',
        green:{
          bottom: 30,
          top: 0,
        },
        red:{
          bottom: 100,
          top: 70,
        },
      },
      stochastic: {
        type: 'STOCHASTIC',
        data: null,
        label: 'Stochastic',
        green:{
          bottom: 20,
          top: 0,
        },
        red:{
          bottom: 100,
          top: 80,
        },
      },
      bbands: {
        type: 'BBANDS',
        data: null,
        label: 'Bollinger Bands',
        green:{
          bottom: 20,
          top: 0,
        },
        red:{
          bottom: 100,
          top: 80,
        },
      },
      williams: {
        type: 'WILLIAMS',
        data: null,
        label: 'Williams R%',
        green:{
          bottom: -80,
          top: -100,
        },
        red:{
          bottom: 0,
          top: -20,
        },
      },
      mfi: {
        type: 'MFI',
        data: null,
        label: 'MFI',
        green:{
          bottom: 100,
          top: 80,
        },
        red:{
          bottom: 20,
          top: 0,
        },
      }
    },
  },
  getters: {
    getSymbols(state) {
      return state.symbols;
    },
    getRsi(state) {
      return state.symbolIndicator.rsi;
    },
    getStochastic(state) {
      return state.symbolIndicator.stochastic;
    },
    getBbands(state) {
      return state.symbolIndicator.bbands;
    },
    getWilliams(state) {
      return state.symbolIndicator.williams;
    },
    getMfi(state) {
      return state.symbolIndicator.mfi;
    },
    getAllIndicators(state) {
      return state.symbolIndicator;
    },
  },
  mutations: {
    SET_SYMBOLS(state, data) {
      state.symbols = data;
    },
    SET_RSI(state, data) {
      state.symbolIndicator.rsi.data = data;
    },
    SET_STOCHASTIC(state, data) {
      state.symbolIndicator.stochastic.data = data;
    },
    SET_BBANDS(state, data) {
      state.symbolIndicator.bbands.data = data;
    },
    SET_WILLIAMS(state, data) {
      state.symbolIndicator.williams.data = data;
    },
    SET_MFI(state, data) {
      state.symbolIndicator.mfi.data = data;
    },
  },
  actions: {
    async fetchSymbols({commit}) {
      let result = await execute('get', 'https://api.telebourse.ir/api/v1/indicator/group/7');
      console.log("RES", result);
      if (result && result.data) {
        let list = result.data.symbols.map((item) => {
          item.value = item.id;
          item.text = item.symbol + ' (' + item.name + ')' ;
          return item;
        })
        commit('SET_SYMBOLS', list);
        return true;
      }
    },
    async fetchSymbolsIndicator({commit}, payload) {
      let result = await execute('get', `https://api.telebourse.ir/api/v1/indicator/symbol/${payload}?period=30`);

      if (result && result.data) {
        commit('SET_RSI', result.data.rsi);
        commit('SET_STOCHASTIC', {
          stochastic_k: result.data.stochastic_k, 
          stochastic_d: result.data.stochastic_d,
        });
        commit('SET_BBANDS', {
          bbands_max: result.data.bbands_max,
          bbands_middle: result.data.bbands_middle,
          bbands_min: result.data.bbands_min,
          bbands_percentage: result.data.bbands_percentage,
        });
        commit('SET_WILLIAMS', result.data.williams);
        commit('SET_MFI', result.data.mfi);
        return true;
      }
    },
  },
  modules: {
  }
})
