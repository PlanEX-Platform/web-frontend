import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'

const baseUrl = '/api'
axios.defaults.baseURL = baseUrl

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  loginUrl: '/login',
  registerUrl: '/register'
})
