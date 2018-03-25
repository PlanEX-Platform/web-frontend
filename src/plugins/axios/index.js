import Vue from 'vue'
import axios from 'axios'

const baseUrl = '/api'
axios.defaults.baseURL = baseUrl

Vue.prototype.$http = axios
