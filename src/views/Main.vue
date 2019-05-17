<template lang="pug">
  v-container(fill-height)
    v-layout(column)
      Search
      .swiper(v-touch="{left: () => swipe('left'), right: () => swipe('right'), up: () => swipe('up'),down: () => swipe('down')}")
        v-img(:src="imageSrc" min-height="100%" v-bind:class="getSwipeDirection").swiper-card
</template>

<script>
import Header from '../components/Header';
import Search from '../components/Search';

export default {
  components: {
    Header, Search
  },
  data() {
    return {
      cards: [],
      currInd: 0,
      imageSrc: require('../assets/profile01.jpg'),
      swipeDirection: 'none'
    };
  },
  methods: {
    async updateMain () {
      this.currInd += 1;
      this.imageSrc = await this.$storage.getUrl(`image/card/${this.cards[this.currInd].id}`);
      this.swipeDirection = 'none';
    },
    async swipe (direction) {
      switch (direction) {
        case 'left':
          this.swipeDirection = direction;
          await this.updateMain();
          break;
        case 'right':
          this.swipeDirection = direction;
          await this.updateMain();
          break;
      }
    }
  },
  async mounted() {
    this.cards = await this.$api.readCards();
    this.imageSrc = await this.$storage.getUrl(`image/card/${this.cards[this.currInd].id}`);
  },
  computed: {
    getImageSrc() {
      return this.imageSrc;
    },
    getSwipeDirection() {
      return this.swipeDirection;
    }
  }
};
</script>

<style scoped lang="sass">
.swiper
  width: 100%
  height: 100%
  overflow: hidden
  display: flex
  justify-content: center
  .swiper-card
    &.left
      transform: translate(-400px)
      transition: all .7s
    &.right
      transform: translate(400px)
      transition: all .7s
    &.none
      transition: none
</style>
