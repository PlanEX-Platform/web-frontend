import Vue from 'vue'
import VueAuthenticate from 'vue-authenticate'

Vue.use(VueAuthenticate, {
  loginUrl: '/login',
  registerUrl: '/register'
})
