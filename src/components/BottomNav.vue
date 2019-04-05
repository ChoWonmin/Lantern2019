<template lang="pug">
  v-bottom-nav(fixed).bottom-nav
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
  bottom: 56px !important
</style>
