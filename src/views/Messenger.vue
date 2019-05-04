<template lang="pug">
  v-container(fill-height fluid style="overflow-y: scroll;")
    v-layout(column)
      v-card.message-room-wrapper
        .message-room
          .message-room-profile
            v-img(:src="require('../assets/profile01.jpg')" contain).circle
          .message-room-content
            .message-room-content-name 백하준
            .message-room-content-msg  봉투가 도착했어요. 화이팅 우와 짱짱이다
          .message-room-time
            .message-room-time-text 10:12
      v-card.message-room-wrapper
        .message-room
          .message-room-profile
            v-img(:src="require('../assets/profile02.jpg')" contain).circle
          .message-room-content
            .message-room-content-name IU
            .message-room-content-msg  봉투가 도착했어요. 화이팅 우와 짱짱이다
          .message-room-time
            .message-room-time-text 10:12
      v-card.message-room-wrapper(@click="$router.push('chatting')")
        .message-room
          .message-room-profile
            v-img(:src="require('../assets/profile01.jpg')" contain).circle
          .message-room-content
            .message-room-content-name 백하준
            .message-room-content-msg  봉투가 도착했어요. 화이팅 우와 짱짱이다
          .message-room-time
            .message-room-time-text 10:12
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

.message-room-wrapper
  padding: 12px 4px
  width: 100%
  height: $message-room-height
  cursor: pointer
  .message-room
    width: 100%
    height: 100%
    display: flex
    align-items: center
    .message-room-profile
      flex: 3
      .circle
        width: 86px
        height: 86px
        border-radius: 20px
    .message-room-content
      flex: 7
      .message-room-content-name
        height: 40px
        line-height: 34px
        font-size: 18px
      .message-room-content-msg
        height: 56px
    .message-room-time
      flex: 2
      height: 100%
      .message-room-time-text
        width: 100%
        height: 34px
        line-height: 24px
        text-align: center
</style>
