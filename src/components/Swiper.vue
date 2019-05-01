<template lang="pug">
    v-layout(v-touch="{left: () => swipe('left'),right: () => swipe('right'), up: () => swipe('up'),down: () => swipe('down')}",
    column align-center justify-center style="height: 500px").grey.lighten-2 {{ swipeDirection }}
        v-card(width="100%" height="100%" v-bind:class="swipeDirection").swiper
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
  transition: all .7s
  &.left
    transform: translate(-500px)
  &.right
    transform: translate(500px)
</style>
