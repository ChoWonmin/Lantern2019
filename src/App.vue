<template lang="pug">
  v-app
    v-content.content
      v-layout(fill-height)
        router-view.pa-0.ma-0
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
