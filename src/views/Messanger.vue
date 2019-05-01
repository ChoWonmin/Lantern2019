<template lang="pug">
  v-container(align-center fill-height fluid style="overflow-y: scroll;")
    v-layout
      v-flex
        v-layout(align-self-center height="72px").message-room
          v-flex(xs3).message-room-profile
            v-img(:src="require('../assets/profile01.jpg')" contain).circle
          v-flex(xs7).message-room-content
            v-flex.message-room-content-name 백하준
            v-flex.message-room-content-msg  봉투가 도착했어요. 화이팅 우와 짱짱이다
          v-flex(xs2).message-room-time 10:12
        v-layout(align-self-center height="72px").message-room
          v-flex(xs3 ).message-room-profile
            v-img(:src="require('../assets/profile01.jpg')" contain).circle
          v-flex(xs7).message-room-content
            v-flex.message-room-content-name 백하준
            v-flex.message-room-content-msg  봉투가 도착했어요. 화이팅 우와 짱짱이다
          v-flex(xs2).message-room-time 10:12
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
$message-room-height: 120px

.message-room
  height: $message-room-height
  .message-room-profile
    flex: 4
    .circle
      width: 72px
      border-radius: 20px
  .message-room-content
    flex: 8
    .message-room-content-name
    .message-room-content-msg
  .message-room-time
    flex: 2
</style>
