<template lang="pug">
  v-app.app-root
    Header
    .content-wrapper
      router-view.pa-0.ma-0
    BottomNav
</template>

<script>
import Header from './components/Header';
import BottomNav from './components/BottomNav'
import authModule from './firebase/firebase.wrapper';

export default {
  name: 'App',
  components: {
    Header,
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
$content-height : calc(100vh - 126px)

*
  font-family: 'Helvetica Neue', 'Nanum Gothic', sans-serif

.content-wrapper
  height: $content-height

.app-root
  overflow: hidden

</style>
