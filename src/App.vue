<template lang="pug">
  v-app.app-root
    Header
    .content-wrapper
      .alart-wrapper
        .profile-wrapper
          .profile
            .profile-image
        .message-wrapper
      router-view.pa-0.ma-0
    BottomNav
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
import Header from './components/Header';
import BottomNav from './components/BottomNav'
import { authModule, dataModule, storageModule } from './firebase/firebase.wrapper';

Vue.prototype.$_ = _;
Vue.prototype.$auth = authModule;
Vue.prototype.$api = dataModule;
Vue.prototype.$storage = storageModule;
Vue.prototype.$user = {
  email: 'HAnana@gmail.com',
  login: true,
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
    BottomNav
  },
  data () {
    return {
      email: undefined,
      password: undefined,
      messageAlert: true
    }
  },
  methods: {
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
  display: flex
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
    background-color: red
  .message-wrapper
    flex: 1
    height: 100%
    background-color: coral

</style>
