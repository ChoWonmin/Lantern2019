<template lang="pug">
  v-container(align-center fill-height).pa-0
    v-layout(column)
      v-img(:src="require('../assets/lantern_main.png')" min-height="100vh").background-wapper
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
    async isUser(uid,uname) {
        const flag = await this.$api.readUser(uid);
        if(flag == null){
            await this.$api.addUser(uid, uname);
            alert("가입되었습니다!ㅊㅋㅊㅋ");
            this.$user.email = uid;
            this.$user.displayName = uname;
            this.$user.login = true;
            this.$emit('changeIsLogin');
            this.$router.push({name: 'main'});
        }

    },
    async loginFacebook() {
      const res = await this.$auth.facebookLogin();
      const uid = (res.user.providerData[0].email==null)?(res.user.providerData[0].uid):(res.user.providerData[0].email);
      const uname = res.user.displayName;
      //console.log(uid);
      this.isUser(uid, uname);
      this.$user.email = uid;
      this.$user.displayName = uname;
      this.$user.login = true;
      this.$emit('changeIsLogin');
      this.$router.push({name: 'main'});
    },
    async loginGoogle() {
      const res = await this.$auth.googleLogin();
      this.isUser(res.user.email, res.user.displayName);
      this.$user.email = res.user.email;
      this.$user.displayName = res.user.displayName;
      this.$user.login = true;
      this.$emit('changeIsLogin');
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
