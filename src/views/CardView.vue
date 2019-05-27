<template lang="pug">
  v-container(align-center fill-height fluid style="overflow-y: scroll;")
    v-layout(column)
      .img-warpper
        v-img(:src="cardImg" height="100%")
      v-layout(height="40px")
        v-chip(v-for="hashtag in hashtags" label color= "yellow darken-3" text-color="white").chip-transparent
          v-icon(left) label
          .subheading.font-weight-bold {{hashtag}}


</template>

<script>
import Header from '../components/Header';
export default {
  components: {
    Header
  },
  data() {
    return {
      hashtags: [],
      cardID: undefined,
      card: [],
      cardImg: "",
      flag: false
    }
  },
  methods: {
    isHover() {
      this.flag = !this.flag;
    },
  },
  async mounted() {
    this.cardID = this.$route.params.cardID;
    this.card = await this.$api.readHashtagByCardID(this.cardID);
    this.hashtags = this.card.hashtags;
    this.cardImg = await this.$storage.getUrl(`image/card/${this.cardID}`);
  }
}
</script>

<style scoped lang="sass">
.img-warpper
  height: calc(100% - 40px)
</style>
