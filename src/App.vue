<template lang="pug">
  v-app
    v-content
      router-view
</template>

<script>
import HelloWorld from './components/HelloWorld'
import authModule from './firebase/firebase.wrapper';

export default {
  name: 'App',
  components: {
    HelloWorld
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
