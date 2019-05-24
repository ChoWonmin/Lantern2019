import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Main from './views/Main.vue';
import LanternList from './views/LanternList.vue';
import Messenger from './views/Messenger';
import Chatting from './views/Chatting';
import CardReg from './views/CardReg';
import CardView from './views/CardView';
import MyPage from './views/MyPage';
import SignUp from "./views/SignUp";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/lanternList',
      name: 'lanternList',
      component: LanternList
    },
    {
      path: '/messenger',
      name: 'messenger',
      component: Messenger
    },
    {
      path: '/chatting/:room',
      name: 'chatting',
      component: Chatting
    },
    {
      path: '/cardReg',
      name: 'cardReg',
      component: CardReg
    },
    {
      path: '/cardView',
      name: 'cardView',
      component: CardView
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: MyPage
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    }
  ]
});
