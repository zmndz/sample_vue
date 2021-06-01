<template>
  <div class="container">
    <div class="long-text">
      <div class="long-text__title">
        Your input:
      </div>
      <div class="long-text__input">
        <textarea v-model="longString" name="" id=""></textarea>
      </div>
      <button class="long-text__submit" @click="submit">
        ثبت
      </button>
      <div v-if="words.length" class="long-text__list">
        <div class="long-text__details" >
          <div class="long-text__words">
            Word
          </div>
          <div class="long-text__counts">
            Repettition 
          </div>
          <div class="long-text__remove">
            Remove
          </div>
        </div>
        <div v-for="(item, index) in words" class="long-text__details" :key="index">
          <div class="long-text__words">
            {{words[index]}}
          </div>
          <div class="long-text__counts">
            {{counter[index]}} 
          </div>
          <div class="long-text__remove">
            <img src="../assets/close.png" @click="remove(index)" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      longString: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
      wordsList: [],
      result: [],
      words: [],
      counter: [],
    }
  },
  computed: {
  },
  methods: {
    wordsCounter(list) {
      this.wordsList = list.split(' ');
      this.result = this.wordsList.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});

      return {
        words: Object.keys(this.result),
        counts: Object.values(this.result)
      }
    },
    submit() {
      let result = this.wordsCounter(this.longString);
      this.words = result.words;
      this.counter = result.counts;
    },
    remove(index) {
      let word = this.words[index];
      let filteredWord = this.wordsList.filter((item) => {
        return item !== word
      })

      this.longString = filteredWord.join(' ')

      this.wordsCounter(this.longString)
      this.submit()
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

.long-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 32px;

  &__title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  &__input {
    margin-bottom: 16px;
    font-size: 20px;
    width: 100%;

    textarea {
      border: 1px solid #dcdcdc;
      border-radius: 6px;
      padding: 8px 16px;
      width: 100%;
      height: 180px;

      &:focus {
        outline: none;
      }
    }
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    border-radius: 6px;
  }

  &__details {
    display: flex;
    width: 100%;
    align-items: center;
    border-top: 1px solid #a9a9a9;
    background-color: #fff;

    &:nth-child(odd) {
      background-color: rgb(241, 241, 241);
    }

    &:last-child {
      border-bottom: 1px solid #a9a9a9;
    }
  }

  &__words {
    width: 34%;
    border-left: 1px solid #a9a9a9;
    padding: 8px;
  }

  &__counts {
    width: 33%;
    border-left: 1px solid #a9a9a9;
    padding: 8px;
    text-align: center;
  }

  &__remove {
    width: 33%;
    border-left: 1px solid #a9a9a9;
    border-right: 1px solid #a9a9a9;
    padding: 8px;
    text-align: center;

    img {
      width: 16px;
      height: auto;
      cursor: pointer;
    }
  }

  &__submit {
    border: none;
    padding: 12px 32px;
    border-radius: 6px;
    background-color: #3acfec;
    color: #fff;
    width: 100%;
    margin-bottom: 32px;
  }

}

</style>
