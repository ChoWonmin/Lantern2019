<template lang="pug">
  v-app.app-root
    .basic(v-show="isLogin")
      Header
      .content-wrapper
        .alart-wrapper
          .profile-wrapper
            .profile
              .profile-image
          .message-wrapper
            .name-text won.min.cho
            .message-text 그냥 밑에 하자
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
  email: '0108257@gmail.com',
  login: false,
  messageRooms: ['EprY3a6xMeOxHhpu9kEa'],
  region: 'New York, USA',
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
      isLogin: false
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

.alart-wrapper
  position: absolute
  display: none // flex
  left: 6px
  top: 24px
  width: calc(100% - 12px)
  height: 72px
  background-color: #fdfdfd
  z-index: 100
  border-radius: 4px
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0.2,0.2,0.2,0.5)
  -moz-box-shadow: 6px 6px 3px 0px rgba(0.2,0.2,0.2,0.5)
  box-shadow: 6px 6px 3px 0px rgba(0.2,0.2,0.2,0.5)
  padding: 4px 12px
  .profile-wrapper
    width: 76px
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    .profile
      width: 54px
      height: 54px
      border-radius: 100%
  .message-wrapper
    flex: 1
    height: 100%
    padding: 4px
    .name-text
      width: 100%
      height: 50%
      font-weight: bold
      font-size: 18px
    .message-text
      width: 100%
      height: 50%
      font-weight: bold
      font-size: 18px

</style>
