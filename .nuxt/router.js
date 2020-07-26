import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _208b94c4 = () => interopDefault(import('../src/pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _28f50786 = () => interopDefault(import('../src/pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _32ac164c = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/posts",
    component: _208b94c4,
    name: "posts"
  }, {
    path: "/posts/:id",
    component: _28f50786,
    name: "posts-id"
  }, {
    path: "/",
    component: _32ac164c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
