import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Intro from './views/Intro.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
