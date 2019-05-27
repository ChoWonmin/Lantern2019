<template lang="pug">
  v-container
    v-layout(column).chatting
      .message-wrapper(v-for="msg in getMessages")
        .message-line(v-show="other===msg.sender")
          .profile
            v-avatar(size="86")
              v-img(:src="require('../assets/a2.jpg')" width="86px" height="86px")
          .content-wrapper
            .text.other {{msg.text}}
            .time 11:11
        v-spacer
        .message-line(v-show="$user.email===msg.sender")
          v-spacer
          .content-wrapper
            .text.my {{msg.text}}
            .time {{ $timeForm(msg.time) }}
    .message-input-wrapper
      v-textarea(solo height="92px" rows="3" v-model="inputMsg")
      v-btn(@click="send") 전송
</template>

<script>
export default {
  data() {
    return {
      room: {},
      messages: [
      ],
      inputMsg: '',
      other: ''
    };
  },
  methods: {
    send: function() {
      // this.inputMsg = this.$api.sendMsg(this.room.id, this.$user.id, this.other, this.inputMsg);
      this.messages.push({
        receiver: 'Jun94@gmail.com',
        sender: this.$user.email,
        text: 'Glad to meet you Ha June!', //this.inputMsg,
        time: new Date()
      });
      this.inputMsg = '';
    }
  },
  async mounted() {
    this.room = this.$route.params.room;
    // this.messages = await this.$api.listenMessageRoom(this.room.id);
    // this.other = this.room.message.sender === this.$user.id ?this.room.message.receiver:this.room.message.sender;
    this.other = '0108257@gmail.com';

    this.messages.push({
      receiver: 'Jun94@gmail.com',
      sender: '0108257@gmail.com',
      text: 'Glad to meet you Ha June!', //this.inputMsg,
      time: new Date()
    });
  },
  computed: {
    getMessages: function () {
      return this.messages;
    }
  }
};
</script>

<style scoped lang="sass">
$message-height: 90px
$message-input-height: 96px

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
      .content-wrapper
        .text
          height: 44px
          line-height: 44px
          padding: 0 12px
          font-size: 20px
          border-radius: 4px
          &.other
            background-color: #ffe1dd
          &.my
            background-color: #ffd600
        .time

.message-input-wrapper
  padding-bottom: 4px
  display: flex
  height: $message-input-height
</style>
