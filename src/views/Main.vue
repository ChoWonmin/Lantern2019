<template lang="pug">
  v-container(fill-height)
    v-layout(column)
      Search
      .swiper(v-touch="{left: () => swipe('left'), right: () => swipe('right'), up: () => swipe('up'),down: () => swipe('down')}")
        .box
          .sub-box.dislike
            .title-box Dislike
          .sub-box.like
            .title-box Like
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
          this.$api.updateHashtag(this.cards[this.currInd].hashtags, true, this.$user.email);
          this.swipeDirection = direction;
          await this.updateMain();
          break;
        case 'right':
          this.$api.updateHashtag(this.cards[this.currInd].hashtags, false, this.$user.email);
          this.swipeDirection = direction;
          await this.updateMain();
          break;
      }
    }
  },
  async mounted() {
    this.cards = await this.$api.readCards();
    this.currCard = this.cards[this.currInd];
    this.imageSrc = await this.$storage.getUrl(`image/card/${this.currCard.id}`);
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
  justify-content: center
  position: relative
  display: flex
  .box
    position: absolute
    width: 100%
    height: 100%
    /*background-color: #4e4e4e*/
    /*opacity: 0.5*/
    z-index: 10
    display: flex
    .dislike
      &:active
        .title-box
          display: block
          transform: rotate(-30deg)
    .like
      &:active
        .title-box
          display: block
          transform: rotate(30deg)
    .sub-box
      flex: 1
      padding-top: 48px
      height: 100%
      .title-box
        text-align: center
        line-height: 48px
        flex: 1
        border-radius: 4px
        font-size: 40px
        font-weight: bold
        border: solid 4px #ffd600
        color: #ffd600
        display: none
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
