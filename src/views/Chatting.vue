<template lang="pug">
  v-container(fill-height fluid style="overflow-y: scroll;")
    v-layout(column)
      .message-wrapper
        .other-message-wrapper
          .other-profile
            v-img(:src="require('../assets/profile02.jpg')" contain).circle
        v-spacer
        .my-message-wrapper
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
$message-height: 120px

.message-wrapper
  padding: 12px 4px
  width: 100%
  height: $message-height
  cursor: pointer
  display: flex
  .other-message-wrapper
    display: flex
    .other-profile
      width: 98px
      display: flex
      .circle
        width: 86px
        height: 86px
        border-radius: 20px
</style>
