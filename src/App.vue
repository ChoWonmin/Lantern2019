<template lang="pug">
  v-app.app-root
    .basic(v-show="isLogin")
      Header
      .content-wrapper
        router-view.pa-0.ma-0
      BottomNav
    .login-warpper(v-show="!isLogin")
      Login(v-on:changeIsLogin="detectIsLogin")
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
import Header from './components/Header';
import BottomNav from './components/BottomNav'
import Login from './components/Login';
import { authModule, dataModule, storageModule, analyticsModule } from './firebase/firebase.wrapper';
import analytic from './analytics/analytic';

Vue.prototype.$_ = _;
Vue.prototype.$auth = authModule;
Vue.prototype.$api = dataModule;
Vue.prototype.$storage = storageModule;
Vue.prototype.$user = {
  email: 'Jun94@gmail.com',
  login: false,
  messageRooms: ['EprY3a6xMeOxHhpu9kEa'],
  region: 'Seoul, Republic of Korea',
  displayName: '',
  gender: '',
  age: -1,
};
Vue.prototype.$timeForm = (date) => `${date.getHours()} : ${date.getMinutes()}`;

export default {
  name: 'App',
  components: {
    Header,
    BottomNav,
    Login
  },
  data () {
    return {
      email: undefined,
      password: undefined,
      messageAlert: true,
      isLogin: true,
    }
  },
  methods: {
    detectIsLogin() {
      this.isLogin = true;
    }
  },
  mounted() {

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
