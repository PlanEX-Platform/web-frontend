import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Registration.vue'
import Balance from '@/pages/Balance.vue'
import Account from '@/pages/Account.vue'
import Deposit from '@/pages/Deposit.vue'
import Withdraw from '@/pages/Withdraw.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/balance',
      name: 'Balance',
      component: Balance,
      meta: { requiresAuth: false }
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { requiresAuth: false }
    },
    {
      path: '/deposit',
      name: 'Deposit',
      component: Deposit,
      meta: { requiresAuth: false }
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta: { requiresAuth: false }
    }
  ],
  mode: 'history'
})
