<template lang="pug">
  v-container(fill-height)
    .alart-wrapper(v-show="openAlart" @click="$router.push({name: 'chatting', params: {room: 'adnladnlk'}})")
      .profile-wrapper
        v-avatar(size="64")
          v-img(:src="image").profile-image
      .msg-wrapper
        .name-text 0108257@gmail.com
        .message-text Glad to meet you Ha June!
    v-layout(column)
      v-layout
        v-combobox(box background-color = "white" full-width :items="states"
        :placeholder ="$user.region" label="location" flat v-model="region" @change="updateNewCards")
      .swiper(v-touch="{left: () => swipe('left'), right: () => swipe('right'), up: () => swipe('up'),down: () => swipe('down')}")
        .box
          .sub-box.dislike
            .title-box Dislike
          .sub-box.like
            .title-box Like
        v-img(:src="imageSrc" min-height="100%" v-bind:class="getSwipeDirection").swiper-card

      <!--v-overlay(:value="overlay" @click="closeOverlay()")-->
      <!--v-img(:src="require('../assets/그룹 3.png')").guide-img-->
</template>

<script>
import Header from '../components/Header';
import Search from '../components/Search';

export default {
  components: {
    Header, Search
  },
  data() {
    return {
      cards: [],
      currInd: 0,
      imageSrc: require('../assets/profile01.jpg'),
      swipeDirection: 'none',
      states: [
        'Seoul, Republic of Korea', 'Osaka, Japan', 'Tokyo, Japan', 'Barcelona, Spain',
        'Taipei, Taiwan', 'Jeju, Republic of Korea', 'London, UK'
      ],
      region: this.$user.region,
      openAlart: false,
      image: require('../assets/a2.jpg')
    };
  },
  methods: {
    async updateNewCards() {
      this.currInd = 0;
      this.cards = await this.$api.readCards(this.region);
      this.currCard = this.cards[this.currInd];
      this.imageSrc = await this.$storage.getUrl(`image/card/${this.currCard.id}`);
    },
    async updateMain () {
      this.currInd += 1;
      this.imageSrc = await this.$storage.getUrl(`image/card/${this.cards[this.currInd].id}`);
      this.swipeDirection = 'none';
    },
    async swipe (direction) {
      switch (direction) {
        case 'left':
          this.$api.updateHashtag(this.cards[this.currInd].hashtags, true, this.$user.email);
          this.swipeDirection = direction;
          await this.updateMain();
          break;
        case 'right':
          this.$api.updateHashtag(this.cards[this.currInd].hashtags, false, this.$user.email);
          this.swipeDirection = direction;
          await this.updateMain();
          break;
      }
    }
  },
  async mounted() {
    await this.updateNewCards();

    setTimeout(() => {
      this.openAlart = true;
    }, 2500);
  },
  computed: {
    getImageSrc() {
      return this.imageSrc;
    },
    getSwipeDirection() {
      return this.swipeDirection;
    }
  }
};
</script>

<style scoped lang="sass">
.swiper
  width: 100%
  height: 100%
  overflow: hidden
  justify-content: center
  position: relative
  display: flex
  .box
    position: absolute
    width: 100%
    height: 100%
    /*background-color: #4e4e4e*/
    /*opacity: 0.5*/
    z-index: 1
    display: flex
    transition: all 1s
    .dislike
      &:active
        .title-box
          display: block
          transform: rotate(-30deg)
    .like
      &:active
        .title-box
          display: block
          transform: rotate(30deg)
    .sub-box
      flex: 1
      padding-top: 48px
      height: 100%
      .title-box
        text-align: center
        line-height: 48px
        flex: 1
        border-radius: 4px
        font-size: 40px
        font-weight: bold
        border: solid 4px #ffd600
        color: #ffd600
        display: none
  .swiper-card
    &.left
      transform: translate(-400px)
      transition: all .7s
    &.right
      transform: translate(400px)
      transition: all .7s
    &.none
      transition: none


.alart-wrapper
  position: absolute
  display: flex
  left: 6px
  top: 24px
  width: calc(100% - 12px)
  height: 72px
  background-color: #fdfdfd
  z-index: 100
  border-radius: 4px
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0.2,0.2,0.2,0.5)
  -moz-box-shadow: 6px 6px 3px 0px rgba(0.2,0.2,0.2,0.5)
  box-shadow: 6px 6px 3px 0px rgba(0.2,0.2,0.2,0.5)
  padding: 4px 12px
  .profile-wrapper
    width: 76px
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    .profile
      width: 54px
      height: 54px
      border-radius: 100%
  .msg-wrapper
    flex: 1
    height: 100%
    padding: 4px
    .name-text
      width: 100%
      height: 50%
      font-weight: bold
      font-size: 18px
      color: grey
    .message-text
      width: 100%
      height: 50%
      font-weight: bold
      font-size: 18px
</style>
