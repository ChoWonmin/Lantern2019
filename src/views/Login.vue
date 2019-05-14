<template lang="pug">
  v-container(align-center fill-height)
    v-layout(column)
      v-flex(@click="loginFacebook")
        v-btn(color="#3b5998").font-weight-bold
          .login-btn sign in with Facebook
      v-flex(@click="loginGoogle")
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
    return {
      test: {}
    };
  },
  methods: {
    loginFacebook() {
      this.$auth.facebookLogin();
    },
    async loginGoogle() {
      const res = await this.$auth.googleLogin();

      this.$user.email = res.user.email;
      this.$user.displayName = res.user.displayName;
      this.$user.login = true;

      this.test = await this.$api.readUser(this.$user.email);
    }
  }
};
</script>

<style scoped lang="sass">
.login-btn
  width: 240px
  color: #efefef
</style>
