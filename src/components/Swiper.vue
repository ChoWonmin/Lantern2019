
<template lang="pug">
  .swiper.grey.lighten-2(@click="swipeDirection='None'"
  v-touch="{left: () => swipe('left'), right: () => swipe('right'), up: () => swipe('up'),down: () => swipe('down')}") {{ swipeDirection }}
    v-card(width="100%" height="100%" v-bind:class="swipeDirection").swiper-card
      v-img(:src="require('../assets/profile01.jpg')" height="100%")
</template>

<script>
export default {
  data: () => ({
    swipeDirection: 'None'
  }),
  methods: {
    swipe (direction) {
      switch (direction) {
        case 'left':
          this.swipeDirection = direction;
          break;
        case 'right':
          this.swipeDirection = direction;
          break;
      }
    }
  }
};
</script>

<style scoped lang="sass">
.swiper
  width: 100%
  height: 100%
  overflow: hidden
  .swiper-card
    transition: all .7s
    &.left
      transform: translate(-500px)
    &.right
      transform: translate(500px)
</style>
