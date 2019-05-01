<template lang="pug">
    v-layout(v-touch="{left: () => swipe('Left'),right: () => swipe('Right'), up: () => swipe('Up'),down: () => swipe('Down')}",
    column, align-center, justify-center,style="height: 500px",class="grey lighten-2") {{ swipeDirection }}
        v-card(width="100%" height="100%").swiper
        v-img(:src="require('../assets/profile01.jpg')" height="100%")
</template>

<script>
    export default {
        data: () => ({
            swipeDirection: 'None'
        }),

        methods: {
            swipe (direction) {
                this.swipeDirection = direction
            }
        }
    };
</script>

<style scoped lang="sass">

</style>
