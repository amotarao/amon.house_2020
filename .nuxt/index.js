import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../src/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_workbox_53a283d5 from 'nuxt_plugin_workbox_53a283d5' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_f94b1822 from 'nuxt_plugin_nuxticons_f94b1822' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_axios_424868f9 from 'nuxt_plugin_axios_424868f9' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_ga_34d43346 from 'nuxt_plugin_ga_34d43346' // Source: ../src/plugins/ga.ts (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","beforeEnter":function() {
            document.querySelector('#__layout').style.overflow = 'hidden';
        },"afterEnter":function() {
            document.querySelector('#__layout').style = null;
        },"appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"ja-jp"},"titleTemplate":(title) => (title ? `${title} - あもんはうす` : 'あもんはうす'),"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"さわむらあもんの記録"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:title","property":"og:title","content":"あもんはうす"},{"hid":"og:description","property":"og:description","content":"さわむらあもんの記録"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Famon.house"},{"hid":"og:site_name","property":"og:site_name","content":"あもんはうす"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fi.imgg.app\u002Famon\u002Famon-house\u002Fjpg?title=%E3%81%82%E3%82%82%E3%82%93%E3%81%AF%E3%81%86%E3%81%99"},{"hid":"og:image:width","property":"og:image:width","content":"1200"},{"hid":"og:image:height","property":"og:image:height","content":"630"},{"hid":"twitter:site","name":"twitter:site","content":"@amotarao"},{"hid":"twitter:creator","name":"twitter:creator","content":"@amotarao"},{"hid":"twitter:card","name":"twitter:card","content":"summary"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"あもんはうす"},{"hid":"author","name":"author","content":"Amon Sawamura"},{"hid":"theme-color","name":"theme-color","content":"#252525"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-icon","type":"image\u002Fpng","href":"\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ficon-192.png"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto:wght@400;700&display=swap"},{"hid":"posts-rss","rel":"alternate","type":"application\u002Frss+xml","title":"あもんはうすの記事","href":"\u002Fposts.xml"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.d0becd0d.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.42f5d8.png"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_53a283d5 === 'function') {
    await nuxt_plugin_workbox_53a283d5(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_f94b1822 === 'function') {
    await nuxt_plugin_nuxticons_f94b1822(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_424868f9 === 'function') {
    await nuxt_plugin_axios_424868f9(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_34d43346 === 'function') {
    await nuxt_plugin_ga_34d43346(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
