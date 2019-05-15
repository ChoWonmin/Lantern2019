<template lang="pug">
  v-container(align-center fill-height)
    v-layout(column)
      v-flex
        v-card(width="100%")
          v-img(:src="require('../assets/profile01.jpg')" width="100%")
        v-btn(@click="uploadImage") upload
      v-flex
        v-chip(v-for="hashtag in getHastage" v-model="hashtag.active" close) {{hashtag.text}}
      v-flex
        v-text-field(solo v-model="hashtageInput" label="hashtag" @change="sendHashtage")
</template>

<script>
export default {
  data() {
    return {
      hashtageInput: '',
      hashtages: []
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
    uploadImage() {

    }
  },
  computed: {
    getHastage() {
      return this.hashtages;
    }
  }

};
</script>

<style scoped lang="sass">

</style>
