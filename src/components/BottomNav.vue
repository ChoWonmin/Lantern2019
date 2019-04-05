<template lang="pug">
  v-bottom-nav.bottom-nav
    v-btn
      v-icon list
    v-btn
      v-icon person
    v-btn
      v-icon home
    v-btn
      v-icon close
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="sass">
  .bottom-nav
    position: fixed
    bottom: 56px
</style>
