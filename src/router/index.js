import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

import NewQuestion from '@/views/question/New'
import EditQuestion from '@/views/question/Edit'
import ShowQuestion from '@/views/question/Show'

import Settings from '@/views/Settings'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/question/new',
      name: 'newQuestion',
      component: NewQuestion
    },
    {
      path: '/question/edit/:id',
      name: 'editQuestion',
      component: EditQuestion,
      props: true
    },
    {
      path: '/question/show/:id',
      name: 'showQuestion',
      component: ShowQuestion,
      props: true
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ]
})

export default router
