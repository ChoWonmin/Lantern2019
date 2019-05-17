<template lang="pug">
  v-app.app-root
    Header
    .content-wrapper
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
  region: 'Seoul',
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
      password: undefined
    }
  },
  methods: {
  },
  mounted() {

    // hello.forEach(e=>{
    //   this.$api.addTest(e);
    // });

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
