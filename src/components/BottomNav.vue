<template lang="pug">
  v-bottom-nav().bottom-nav
    v-btn
      v-img(:src="require('../assets/lanternlogosimple2.svg')" width="14" contain).logo-icon
    v-btn
      v-icon view_list
    v-btn
      v-icon sms
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
