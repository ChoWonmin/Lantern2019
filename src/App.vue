<template lang="pug">
  v-app
    v-container
      v-text-field(placeholder='id')
      v-text-field(placeholder='pw')
      v-btn(@click="clickBtn") login

</template>

<script>
import HelloWorld from './components/HelloWorld'
import api from './firebase/firebase.wrapper';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  },
  methods: {
    clickBtn() {
      console.log('hi');
      api.database.doc('hello').set({
        test: '바이서경'
      })
    }
  }
}
</script>
