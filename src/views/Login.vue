<template lang="pug">
  v-container(align-center="true")
    Header
    v-layout(align-center justify-center column fill-height)
      v-card
        v-flex
          v-btn(color="#3b5998").font-weight-bold
            .login-btn sign in with Facebook
        v-flex
          v-btn(color="#dd4b39").font-weight-bold
            .login-btn sign in with Google
</template>

<script>
import Header from '../components/Header';

export default {
  name: 'Login',
  components: {
    Header
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="sass">
.login-btn
  width: 240px
  color: #efefef
</style>
