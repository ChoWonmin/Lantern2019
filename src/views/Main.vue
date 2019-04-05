<template lang="pug">
  v-container
    v-layout
      Header
    v-layout
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
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="sass">
</style>
