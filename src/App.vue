<template lang="pug">
  v-app
    v-content
      v-layout
        router-view
    BottomNav
</template>

<script>
import BottomNav from './components/BottomNav'
import authModule from './firebase/firebase.wrapper';

export default {
  name: 'App',
  components: {
    BottomNav
  },
  data () {
    return {
      email: undefined,
      password: undefined
    }
  },
  methods: {
    clickBtn() {
      authModule.facebookLogin();
    }
  }
}
</script>

<style lang="sass">
*
  font-family: 'Helvetica Neue', 'Nanum Gothic', sans-serif
</style>
