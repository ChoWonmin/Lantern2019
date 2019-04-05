<template lang="pug">
  .header.grey.lighten-4
      v-flex
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
 height: 70px !important
 z-index: 100
 top: 0
 position: sticky
 display: flex
 align-items: center
</style>
