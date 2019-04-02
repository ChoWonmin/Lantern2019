<template lang="pug">
  v-container.pa-0.ma-0
    v-layout
      Header
    Search
</template>

<script>
import Header from '../components/Header';
import Search from '../components/Search';
export default {
  components: {
    Header, Search
  },
  data() {
    return '';
  },
  methods: {}
};
</script>

<style scoped lang="sass">
</style>
