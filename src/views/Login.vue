<template lang="pug">
  v-container(align-center fill-height)
    v-layout(column)
      v-flex
        v-btn(color="#3b5998" @click="login").font-weight-bold
          .login-btn sign in with Facebook
      v-flex
        v-btn(color="#dd4b39").font-weight-bold
          .login-btn sign in with Google
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
  methods: {
    login() {
      // console.log(
      //   this.$auth.googleLogin()
      // );

    }
  }
};
</script>

<style scoped lang="sass">
.login-btn
  width: 240px
  color: #efefef
</style>
