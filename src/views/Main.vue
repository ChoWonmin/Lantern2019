<template lang="pug">
  v-container
    v-layout(fill-height column)
      Search
      //Swiper
      video#player(controls autoplay)
      input(type="file" accept="image/*" capture="camera")
</template>

<script>
import Header from '../components/Header';
import Search from '../components/Search';
import Swiper from '../components/Swiper';

export default {
  components: {
    Header, Search, Swiper
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const player = document.getElementById('player');
    const handleSuccess = function(stream) {
        player.srcObject = stream;
    };
    navigator.mediaDevices.getUserMedia({video: true}).then(handleSuccess);

  }
};
</script>

<style scoped lang="sass">
</style>
