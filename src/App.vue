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
      isLogin: true
    }
  },
  methods: {
      detectIsLogin() {
          this.isLogin = true;
      }
  },
  mounted() {
    const idList = [
      '0108257@gmail.com', 'Jun94@gmail.com', 'dtuna0407@gmail.com', 'jae0101@gmail.com',
      'HAnana@gmail.com' ,'Sonny@gmail.com','Queen_yuna@gmail.com'
    ];


    const obg = {
      'Jun94@gmail.com': [
        {
          count: 2,
          name: 'Soju'
        },
        {
          count: 1,
          name: 'Fashoin'
        },
        {
          count: 2,
          name: 'Nightculture'
        },
        {
          count: 2,
          name: 'Bimbimbap'
        },
        {
          count: 2,
          name: 'K-beauty'
        },
        {
          count: 1,
          name: 'Koreafood'
        },
        {
          count: 1,
          name: 'Site'
        },
        {
          count: 3,
          name: 'Coffeeshop'
        },
        {
          count: 3,
          name: 'BTS'
        },
        {
          count: 2,
          name: 'K-pop'
        },
        {
          count: 3,
          name: 'Kyongbokkung'
        },
        {
          count: 3,
          name: 'Hanbok'
        },
        {
          count: 3,
          name: 'Seoultower'
        },
        {
          count: 3,
          name: 'Lotteworldtower'
        },
        {
          count: 3,
          name: 'Nightview'
        }
      ],
      'dtuna0407@gmail.com': [
        {
          count: 1,
          name: 'Soju'
        },
        {
          count: 2,
          name: 'Fashoin'
        },
        {
          count: 3,
          name: 'Nightculture'
        },
        {
          count: 1,
          name: 'Bimbimbap'
        },
        {
          count: 2,
          name: 'K-beauty'
        },
        {
          count: 1,
          name: 'Koreafood'
        },
        {
          count: 3,
          name: 'Site'
        },
        {
          count: 1,
          name: 'Coffeeshop'
        },
        {
          count: 1,
          name: 'BTS'
        },
        {
          count: 1,
          name: 'K-pop'
        },
        {
          count: 1,
          name: 'Kyongbokkung'
        },
        {
          count: 2,
          name: 'Hanbok'
        },
        {
          count: 2,
          name: 'Seoultower'
        },
        {
          count: 1,
          name: 'Lotteworldtower'
        },
        {
          count: 2,
          name: 'Nightview'
        },
        {
          count: 5,
          name: 'Football'
        },
        {
          count: 3,
          name: 'Basketball'
        },
        {
          count: 3,
          name: 'Sports'
        }
      ],
      'jae0101@gmail.com': [
        {
          count: 1,
          name: 'Soju'
        },
        {
          count: 1,
          name: 'Fashoin'
        },
        {
          count: 1,
          name: 'Nightculture'
        },
        {
          count: 1,
          name: 'K-beauty'
        },
        {
          count: 1,
          name: 'Koreafood'
        },
        {
          count: 1,
          name: 'Site'
        },
        {
          count: 2,
          name: 'Coffeeshop'
        },
        {
          count: 1,
          name: 'BTS'
        },
        {
          count: 1,
          name: 'K-pop'
        },
        {
          count: 1,
          name: 'Kyongbokkung'
        },
        {
          count: 1,
          name: 'Hanbok'
        },
        {
          count: 1,
          name: 'Seoultower'
        },
        {
          count: 1,
          name: 'Lotteworldtower'
        },
        {
          count: 1,
          name: 'Nightview'
        },
        {
          count: 2,
          name: 'Football'
        },
        {
          count: 5,
          name: 'Basketball'
        },
        {
          count: 4,
          name: 'Sports'
        }
      ],
      'HAnana@gmail.com': [
        {
          count: 3,
          name: 'Soju'
        },
        {
          count: 3,
          name: 'Fashoin'
        },
        {
          count: 3,
          name: 'Nightculture'
        },
        {
          count: 4,
          name: 'Bimbimbap'
        },
        {
          count: 4,
          name: 'K-beauty'
        },
        {
          count: 1,
          name: 'Koreafood'
        },
        {
          count: 1,
          name: 'Site'
        },
        {
          count: 1,
          name: 'Coffeeshop'
        },
        {
          count: 4,
          name: 'BTS'
        },
        {
          count: 3,
          name: 'K-pop'
        },
        {
          count: 4,
          name: 'Seoultower'
        },
        {
          count: 3,
          name: 'Nightview'
        },
        {
          count: 3,
          name: 'Football'
        },
        {
          count: 5,
          name: 'Basketball'
        },
        {
          count: 2,
          name: 'Sports'
        }
      ],
      'Sonny@gmail.com': [
        {
          count: 3,
          name: 'Soju'
        },
        {
          count: 3,
          name: 'Nightculture'
        },
        {
          count: 3,
          name: 'Bimbimbap'
        },
        {
          count: 2,
          name: 'K-beauty'
        },
        {
          count: 1,
          name: 'Koreafood'
        },
        {
          count: 1,
          name: 'Site'
        },
        {
          count: 2,
          name: 'Coffeeshop'
        },
        {
          count: 1,
          name: 'BTS'
        },
        {
          count: 1,
          name: 'K-pop'
        },
        {
          count: 2,
          name: 'Kyongbokkung'
        },
        {
          count: 2,
          name: 'Hanbok'
        },
        {
          count: 2,
          name: 'Seoultower'
        },
        {
          count: 1,
          name: 'Lotteworldtower'
        },
        {
          count: 1,
          name: 'Nightview'
        },
        {
          count: 6,
          name: 'Football'
        },
        {
          count: 2,
          name: 'Basketball'
        },
        {
          count: 6,
          name: 'Sports'
        }
      ],
      'Queen_yuna@gmail.com': [
        {
          count: 3,
          name: 'Soju'
        },
        {
          count: 3,
          name: 'Fashoin'
        },
        {
          count: 2,
          name: 'Nightculture'
        },
        {
          count: 2,
          name: 'Bimbimbap'
        },
        {
          count: 3,
          name: 'K-beauty'
        },
        {
          count: 2,
          name: 'Koreafood'
        },
        {
          count: 2,
          name: 'Site'
        },
        {
          count: 3,
          name: 'Coffeeshop'
        },
        {
          count: 2,
          name: 'BTS'
        },
        {
          count: 3,
          name: 'K-pop'
        },
        {
          count: 1,
          name: 'Kyongbokkung'
        },
        {
          count: 1,
          name: 'Hanbok'
        },
        {
          count: 4,
          name: 'Seoultower'
        },
        {
          count: 1,
          name: 'Lotteworldtower'
        },
        {
          count: 1,
          name: 'Football'
        },
        {
          count: 1,
          name: 'Basketball'
        },
        {
          count: 1,
          name: 'Sports'
        }
      ],
      '0108257@gmail.com': [
        {
          count: 3,
          name: 'Soju'
        },
        {
          count: 1,
          name: 'Fashoin'
        },
        {
          count: 2,
          name: 'Nightculture'
        },
        {
          count: 1,
          name: 'Bimbimbap'
        },
        {
          count: 2,
          name: 'K-beauty'
        },
        {
          count: 1,
          name: 'Koreafood'
        },
        {
          count: 1,
          name: 'Site'
        },
        {
          count: 3,
          name: 'Coffeeshop'
        },
        {
          count: 3,
          name: 'BTS'
        },
        {
          count: 1,
          name: 'K-pop'
        },
        {
          count: 2,
          name: 'Kyongbokkung'
        },
        {
          count: 2,
          name: 'Hanbok'
        },
        {
          count: 2,
          name: 'Seoultower'
        },
        {
          count: 2,
          name: 'Lotteworldtower'
        },
        {
          count: 2,
          name: 'Nightview'
        }
      ]
    };

    // dataModule.testData(idList[1], obg[idList[1]]);

    // analyticsModule.updateCF('HAnana@gmail.com', '0108257@gmail.com');

    idList.forEach(ele1 => {
      // dataModule.testData(ele1, obg[ele1]);
      idList.forEach(ele2 => {
        if (ele1 !== ele2) {
          // console.error(ele1, ele2);
          // analyticsModule.updateCF(ele1, ele2);
        }
      })
    });

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
