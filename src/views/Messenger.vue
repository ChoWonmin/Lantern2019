<template lang="pug">
  v-container(fill-height fluid style="overflow-y: scroll;")
    v-layout(column)
      v-card.message-room-wrapper(v-for="room in rooms")
        .message-room
          .message-room-profile
            v-img(:src="require('../assets/profile01.jpg')" contain).circle
          .message-room-content
            .message-room-content-name {{$user.id===room.messages[0].sender?room.messages[0].receiver:room.messages[0].sender}}
            .message-room-content-msg  {{room.messages[0].text}}
          .message-room-time
            .message-room-time-text {{room.messages[0].time}}
</template>

<script>
export default {
  data() {
    return {
      rooms: []
    };
  },
  methods: {},
  async mounted() {
    this.rooms = await this.$api.readMessageRooms(this.$user.id);
  }
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
