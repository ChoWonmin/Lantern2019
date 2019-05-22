<template lang="pug">
  v-bottom-nav().bottom-nav
    v-btn(to="/")
      v-img(:src="require('../assets/자산 1.svg')" width="17" contain).logo-icon
    v-btn(to="lanternList")
      v-icon view_list
    v-btn(to="messenger")
      v-icon sms
    v-btn(to="cardReg")
      v-icon add
    v-btn(to="myPage")
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
.logo-icon
    margin-bottom: 5px

</style>
