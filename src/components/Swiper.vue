
<template lang="pug">
  .swiper.grey.lighten-2(v-touch="{left: () => swipe('left'), right: () => swipe('right'), up: () => swipe('up'),down: () => swipe('down')}") {{ swipeDirection }}
    v-card(width="100%" height="100%" v-bind:class="swipeDirection").swiper-card
      v-img(:src="" height="100%")
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: require('../assets/profile01.jpg')
    }
  },
  data: () => ({
    swipeDirection: 'None'
  }),
  methods: {
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
