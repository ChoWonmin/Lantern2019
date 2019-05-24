<template lang="pug">
  v-container(align-center fill-height)
    v-layout(column)
      v-flex
        v-card(width="100%")
          v-img(:src="getImageSrc" width="100%" max-height="50vh")
        v-btn(@click="$refs.inputUpload.click()") image
          input(type="file" ref="inputUpload" v-show="false" accept="image/*" @change="detectFiles($event.target.files)")
      v-flex
        v-chip(v-for="hashtag in getHastage" v-model="hashtag.active" close) {{hashtag.text}}
      v-flex
        v-text-field(solo v-model="hashtageInput" label="hashtag" @change="sendHashtage")
      v-flex
        v-btn(@click="sendCard") Send
</template>

<script>
export default {
  data() {
    return {
      hashtageInput: '',
      hashtages: [],
      file: undefined
    };
  },
  methods: {
    sendHashtage() {
      const obj = {
        active: true,
        text: this.hashtageInput
      };
      this.hashtages.push(obj);
      this.hashtageInput = '';
    },
    detectFiles(files) {
      this.file = files[0];
    },
    async sendCard() {
      const hashtag = this.hashtages.filter(e=>e.active===true).map(e=>e.text);

      if (this.file !== undefined) {
        await this.$api.uploadCard(this.file, hashtag, this.$user.email, this.$user.region);
      }

      this.$router.push({name:'main'});
    }
  },
  computed: {
    getHastage() {
      return this.hashtages;
    },
    getImageSrc() {
      if (this.file===undefined) {
        return require('../assets/profile01.jpg');
      } else {
        return URL.createObjectURL(this.file);
      }
    }
  }

};
</script>

<style scoped lang="sass">

</style>
