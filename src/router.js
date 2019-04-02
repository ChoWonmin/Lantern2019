import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Main from './views/Main.vue';
import LanternList from './views/LanternList.vue';

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
      path: '/lgoin',
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
    }
  ]
});
