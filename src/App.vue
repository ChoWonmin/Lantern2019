<template lang="pug">
  v-app
    v-container
      .hello {{email}}
      v-text-field(placeholder='id' v-model="email")
      v-text-field(placeholder='pw' v-model="password")
      v-btn(@click="clickBtn") login
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
