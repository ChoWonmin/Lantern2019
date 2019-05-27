<template lang="pug">
  v-container(align-center fill-height fluid style="overflow-y: scroll;")
    v-layout
      v-flex(xs12 sm6 offset-sm3)
        .back
          v-img(:src="profileImg").backimg
        .profile
          v-avatar(size="120px").avatar-wrapper
            v-img(:src="profileImg" alt="Avatar")
        .detail
          .line-warpper
            .name.title {{user.name}}
            .age.title &nbsp;( {{user.age}} , {{user.sex}} )
          .line-warpper
            v-icon(small) location_on
            .text {{user.region}}
          .line-warpper
            v-icon(small) language
            .text {{user.lang.join('  ')}}
        .lantern-switch-wrapper(v-show="$user.email!==userID")
          .lantern-switch
            v-switch(v-model="isLantern" color="yellow darken-3" @change="onOffLantern")
          .lantern-text(v-bind:class="{active: isLantern}") {{getLanternText}}
        .message-wrapper(v-show="$user.email===userID")
          v-btn(@click="$router.push({name: 'chatting', params: {room: 'hello'}})")
            v-icon send
            .btn-name message
        v-card.cards-wrapper
          v-container(grid-list-sm fluid).pa-0
            v-layout(row wrap)
              v-flex(v-for="card in cardArray" xs4 d-flex)
                v-card(flat tile class="d-flex" @click="$router.push({name:'cardView', params: {cardID: card.cardID}})")
                  v-img(:src="card.cardSrc" aspect-ratio="1" class="grey lighten-2")
                    v-layout(fill-height align-center justify-center ma-0)
</template>

<script>
import Header from '../components/Header';
export default {
  components: {
      Header
  },
  data() {
    return {
      userID: '',
      user: {lang: []},
      profileImg: '',
      cards: [],
      isLantern: false,
      cardArray: [],
    }
  },
  async mounted() {
    this.userID = this.$route.params.id;
    this.userID = 'Jun94@gmail.com';
    this.user = await this.$api.readUser(this.userID);
    this.profileImg = await this.$storage.getUrl(`image/user/${this.userID}`);
    this.cards = await this.$api.readCardsByUserID(this.userID);

    for (let ele of this.cards) {
      this.cardArray.push({
        cardSrc: await this.$storage.getUrl(`image/card/${ele.id}`),
        cardID: ele.id
      });
    }

    this.isLantern = this.user.isLantern;
  },
  methods: {
    onOffLantern() {
      // this.$api.onOffLantern(this.isLantern);
    }
  },
  computed: {
    getLanternText() {
      return this.isLantern?'You are a lantern!':'Show my card and become a lantern';
    }
  }
}
</script>

<style scoped lang="sass">
  .btn-name
    text-indent: 8px
  .back
    height: 200px
    .backimg
      height: 100%
      opacity: 0.5
  .profile
    position: relative
    width: 100%
    height: 70px
    .avatar-wrapper
      position: absolute
      left: calc(50% - 60px)
      top: -60px
      z-index: 100
  .detail
    text-align: center
    .line-warpper
      padding-top: 10px
      padding-bottom: 10px
      display: flex
      justify-content: center
    .spacer
      flex: 1
      height: 12px



  .lantern-switch-wrapper
    background-color: #EEEEEE
    height: 60px
    display: flex
    padding-left: 30px
    padding-right: 30px
    .lantern-switch
      flex: 1
      align-items: center
      max-width: 50px
    .lantern-text
      height: 100%
      width: 100%
      line-height: 60px
      text-align: center
      font-weight: normal
      font-size: medium
      color: #757575
      &.active
        color: #ffb300
        font-size: 25px
  .message-wrapper
    display: flex
    justify-content: center
  .cards-wrapper
    padding-top: 20px
</style>
