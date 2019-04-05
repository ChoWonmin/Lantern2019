<template lang="pug">
  .header.grey.lighten-4
      v-flex.pt-4.pb-1
        v-img(:src="require('../assets/logo_lantern.svg')" height="40" contain )
</template>

<script>
    export default {
      data() {
        return {};
      },
      methods: {
      }
    };
</script>

<style scoped lang="sass">
.header
 height: 80px
 z-index: 100
 top: 0
 position: sticky
</style>
