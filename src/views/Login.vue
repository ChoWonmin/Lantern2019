<template lang="pug">
  v-container(align-center fill-height)
    v-layout(column)
        v-img(:src="require('../assets/lantern_main.png')" min-height="750").background-wapper
            .buttons-wapper
              v-flex(@click="loginFacebook")
                v-btn(color="#3b5998").font-weight-bold
                  .login-btn sign in with Facebook
              v-flex(@click="loginGoogle")
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
    async isUser(user) {
        const flag = await this.$api.readUser(user.email);
        if(flag == null){
            alert("가입되었습니다!ㅊㅋㅊㅋ");
            this.$api.addUser(user.email, user.displayName);
        }

    },
    async loginFacebook() {
      const res = await this.$auth.facebookLogin();
      this.isUser(res.user);
      this.$user.email = res.user.email;
      this.$user.displayName = res.user.displayName;
      this.$user.login = true;
      this.$router.push({name: 'main'});
    },
    async loginGoogle() {
      const res = await this.$auth.googleLogin();
      this.isUser(res.user);
      this.$user.email = res.user.email;
      this.$user.displayName = res.user.displayName;
      this.$user.login = true;
      this.$router.push({name: 'main'});
    }
  }
};
</script>

<style scoped lang="sass">
.login-btn
  width: 240px
  color: #efefef
.background-wapper
    height: 100%
.buttons-wapper
    padding-top: 500px
    padding-left: 45px



</style>
