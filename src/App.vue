<template>
  <div class="app" id="app">
    <div class="container">
      <div class="symbols-list__wrapper">
        <div class="symbols-list__title">
          نماد مرود نظر را انتخاب کنید: 
        </div>
        <b-form-select v-model="selectedSymbol" :options="symbols" @input="loadSymbolsIndicators">
        </b-form-select>
      </div>
      <Indicators v-if="isDataLoaded" :indicatorsList="indicatorsData" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Indicators from '@/components/Indicators';

export default {
  components: {
    Indicators,
  },
  data() {
    return {
      isDataLoaded: false,
      indicatorsData: [],
      symbols:[],
      selectedSymbol: null,
    }
  },
  computed: {
    ...mapGetters([
      'getSymbols',
      'getRsi',
      'getStochastic',
      'getBbands',
      'getWilliams',
      'getMfi',
      'getAllIndicators',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchSymbolsIndicator',
      'fetchSymbols',
    ]),
    async loadSymbolsIndicators() {
      console.log("selectedSymbol", this.selectedSymbol)
      let result = await this.fetchSymbolsIndicator(this.selectedSymbol);
      if (result) {
        console.log("all", this.getAllIndicators)
        this.indicatorsData = this.getAllIndicators;
        this.isDataLoaded = true;
      }

    },
    async loadSymbols() {
      let result = await this.fetchSymbols();
      if (result) {
        console.log("getSymbols", this.getSymbols)
        this.symbols = this.getSymbols;
      }

    },
  },
  mounted() {
    this.loadSymbols();
  }
}
</script>

<style lang="scss">

  .app {
    background: rgba(233, 237, 244, 0.65);
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
  }

  .symbols-list {

    &__wrapper {
      direction: rtl;
      text-align: right;
      margin-top: 80px;
    }

    &__title {
      margin-bottom: 16px;
    }
  }
</style>
