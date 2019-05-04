<template lang="pug">
  v-container
    v-layout(column).chatting
      .message-wrapper(v-for="msg in messages")
        .message-line(v-show="myId!==msg.id")
          .profile
            v-img(:src="msg.profile" contain).circle
          .content-wrapper
            .text.other {{msg.text}}
            .time {{msg.time}}
        v-spacer
        .message-line(v-show="myId===msg.id")
          v-spacer
          .content-wrapper
            .text.my {{msg.text}}
            .time {{msg.time}}
    .message-input-wrapper
      v-textarea(solo)
      v-btn() 전송
</template>

<script>
export default {
  data() {
    return {
      myId: '001',
      messages: [
        {
          id: '001',
          profile: require('../assets/profile02.jpg'),
          text: 'hello',
          time: '12:05'
        },
        {
          id: '002',
          profile: require('../assets/profile01.jpg'),
          text: 'hi',
          time: '12:07'
        },
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="sass">
$message-height: 90px
$message-input-height: 50px

.chatting
  overflow-y: scroll
  height: calc(100vh - 126px - #{$message-input-height})
  .message-wrapper
    padding: 12px 4px
    width: 100%
    height: $message-height
    cursor: pointer
    display: flex
    .message-line
      display: flex
      width: 100%
      height: 100%
      .profile
        width: 98px
        display: flex
        .circle
          width: 86px
          height: 86px
          border-radius: 10%
      .content-wrapper
        .text
          height: 44px
          line-height: 44px
          padding: 0 4px
          font-size: 24px
          border-radius: 4px
          &.other
            background-color: #ffe1dd
          &.my
            background-color: #ffd600
        .time

.message-input-wrapper
  display: flex
  height: 68px
</style>
