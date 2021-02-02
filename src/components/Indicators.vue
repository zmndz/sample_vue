<template>
  <div class="indicators">
    <div v-for="(indicator, index) in indicatorsList" class="row" :key="index">
      
      <div v-if="indicator.type === 'RSI'" class="col-12">
        <div class="indicators__type">
          <div class="indicators__name">
            {{indicator.label}}
          </div>
          <div class="indicators__bar">
            <div class="indicators__pointer" :style="CalcPointerPosition(indicator.data)">
              <div style="position: relative;">
                <div class="indicators__pointer-value">
                  {{indicator.data}}
                </div>
              </div>
            </div>
            <div class="indicators__red-range indicators__red-range--rsi">
              <div class="indicators__red-range--bottom">
                {{indicator.red.bottom}}
              </div>
              <div class="indicators__red-range--top">
                {{indicator.red.top}}
              </div>
            </div>
            <div class="indicators__green-range indicators__green-range--rsi">
              <div class="indicators__green-range--bottom">
                {{indicator.green.bottom}}
              </div>
              <div class="indicators__green-range--top">
                {{indicator.green.top}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="indicator.type === 'WILLIAMS'" class="col-12">
        <div  class="indicators__type">
          <div class="indicators__name">
            {{indicator.label}}
          </div>
          <div class="indicators__bar">
            <div class="indicators__pointer" :style="CalcPointerPosition(100 + indicator.data)">
              <div style="position: relative;">
                <div class="indicators__pointer-value">
                  {{indicator.data}}
                </div>
              </div>
            </div>
            <div class="indicators__red-range">
              <div class="indicators__red-range--bottom">
                {{indicator.red.bottom}}
              </div>
              <div class="indicators__red-range--top">
                {{indicator.red.top}}
              </div>
            </div>
            <div class="indicators__green-range">
              <div class="indicators__green-range--bottom">
                {{indicator.green.bottom}}
              </div>
              <div class="indicators__green-range--top">
                {{indicator.green.top}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="indicator.type === 'MFI'" class="col-12">
        <div class="indicators__type">
          <div class="indicators__name">
            {{indicator.label}}
          </div>
          <div class="indicators__bar">
            <div class="indicators__pointer" :style="CalcPointerPosition(indicator.data)">
              <div style="position: relative;">
                <div class="indicators__pointer-value">
                  {{indicator.data}}
                </div>
              </div>
            </div>
            <div class="indicators__red-range indicators__red-range--rsi">
              <div class="indicators__red-range--bottom">
                {{indicator.red.bottom}}
              </div>
              <div class="indicators__red-range--top">
                {{indicator.red.top}}
              </div>
            </div>
            <div class="indicators__green-range indicators__green-range--rsi">
              <div class="indicators__green-range--bottom">
                {{indicator.green.bottom}}
              </div>
              <div class="indicators__green-range--top">
                {{indicator.green.top}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="indicator.type === 'BBANDS'" class="col-12">
        <div class="indicators__type">
          <div class="indicators__name">
            {{indicator.label}}
          </div>
          <div class="indicators__bar">
            <div class="indicators__pointer" :style="CalcPointerPosition(indicator.data.bbands_percentage)">
              <div style="position: relative;">
                <div class="indicators__pointer-value">
                  {{indicator.data.bbands_percentage}}
                </div>
              </div>
            </div>
            <div class="indicators__red-range indicators__red-range--rsi">
              <div class="indicators__red-range--bottom">
                {{indicator.red.bottom}}
              </div>
              <div class="indicators__red-range--top">
                {{indicator.red.top}}
              </div>
            </div>
            <div class="indicators__green-range indicators__green-range--rsi">
              <div class="indicators__green-range--bottom">
                {{indicator.green.bottom}}
              </div>
              <div class="indicators__green-range--top">
                {{indicator.green.top}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="indicator.type === 'STOCHASTIC'" class="col-12">
        <div class="indicators__type">
          <div class="indicators__name">
            {{indicator.label}}
          </div>
          <div class="indicators__bar">
            <div class="indicators__pointer" :style="CalcPointerPosition(indicator.data.stochastic_k)">
              <div style="position: relative;">
                <div class="indicators__pointer-value">
                  {{indicator.data.stochastic_k}}
                </div>
              </div>
            </div>
            <div class="indicators__pointer" :style="CalcPointerPosition(indicator.data.stochastic_d)">
              <div style="position: relative;">
                <div class="indicators__pointer-value">
                  {{indicator.data.stochastic_d}}
                </div>
              </div>
            </div>
            <div class="indicators__red-range">
              <div class="indicators__red-range--bottom">
                {{indicator.red.bottom}}
              </div>
              <div class="indicators__red-range--top">
                {{indicator.red.top}}
              </div>
            </div>
            <div class="indicators__green-range">
              <div class="indicators__green-range--bottom">
                {{indicator.green.bottom}}
              </div>
              <div class="indicators__green-range--top">
                {{indicator.green.top}}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Indicators',
  props: ['indicatorsList'],
  data() {
    return {

    }
  },
  methods: {
    CalcPointerPosition(value) {
      return 'right: calc(' + value + '% - 22px);';
    },
  },
}
</script>

<style scoped lang="scss" scopped>
.indicators {
  margin-top: 48px;

  &__type {
    margin: 32px 0;
    border-radius: 10px;
    padding: 6px 16px;
    background-color: #fff;
    box-shadow: 5px -1px 30px 0 rgba(0,0,0,.12);
    display: flex;

    &:hover {

      .indicators__pointer-value {
        display: block;
      }
    }
  }

  &__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    font-size: 24px;
    border-right: 1px solid #ccc;
  }

  &__bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 32px 16px  32px 32px;
    height: 24px;
    background-image: linear-gradient(45deg, #ffffff 27.78%, #e9edf4 27.78%, #e9edf4 50%, #ffffff 50%, #ffffff 77.78%, #e9edf4 77.78%, #e9edf4 100%);
    background-size: 12.73px 12.73px;

  }
  
  &__pointer {
    position: absolute;
    top: -6px;
    right: 0;
    height: 100%;
    width: 24px;
    background: rgb(17, 25, 94);
    opacity: 1;
    border-radius: 100%;

    &::before {
      content: '';
      height: 12px;
      width: 12px;
      background: rgb(17, 25, 94);
      position: absolute;
      transform: rotate(45deg);
      top: 15px;
      left: 6px;
    }

    &-value {
      position: absolute;
      top: -36px;
      transform: translateX(calc(-50% + 10px));
      background-color: rgb(34, 34, 34);
      color: #fff;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 14px;
      display: none;
    }
  }

  &__red-range {
    width: 20%;
    background-color: rgb(228, 51, 86);
    border-radius: 4px;
    position: relative;
    opacity: 0.85;

    &--rsi {
      width: 30%;
    }

    &--bottom {
      position: absolute;
      left: 0;
      top: -24px;
    }

    &--top {
      position: absolute;
      right: 0;
      top: -24px;
    }
  }

  &__green-range {
    width: 20%;
    background-color: rgb(54, 185, 94);
    border-radius: 4px;
    position: relative;
    opacity: 0.85;

    &--rsi {
      width: 30%;
    }

    &--bottom {
      position: absolute;
      left: 0;
      top: -24px;
    }

    &--top {
      position: absolute;
      right: 0;
      top: -24px;
    }
  }


}
</style>
