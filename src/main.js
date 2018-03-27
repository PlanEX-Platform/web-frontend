import Vue from 'vue'
import App from './App'
import './plugins/index'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    const auth = store.state.isLoggedIn
    !auth
      ? next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      : next()
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
