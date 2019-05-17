<template lang="pug">
  v-bottom-nav().bottom-nav
    v-btn(to="/")
      v-img(:src="require('../assets/lanternlogosimple2.svg')" width="14" contain).logo-icon
    v-btn(to="lanternList")
      v-icon view_list
    v-btn(to="messenger")
      v-icon sms
    v-btn(to="cardReg")
      v-icon add
    v-btn
      v-icon home

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
  position: sticky

</style>
