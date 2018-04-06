<template>
  <div class="flex-body">
    <Header/>
    <section class="section flex-1">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input is-dark" type="email" v-model="username" placeholder="Email">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input is-dark" v-model="pass" type="password" placeholder="Password">
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link is-dark" @click="login()">Login</button>
              </div>
              <div class="control">
                <router-link class="button" to="/register">Registration</router-link>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
    <bottom></bottom>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Bottom from '@/components/Bottom.vue'
import qs from 'qs'

export default {
  components: {
    Header,
    Bottom
  },
  computed: {
    isAuth () {
      return this.$auth.isAuthenticated()
    }
  },
  data () {
    return {
      username: '',
      pass: ''
    }
  },
  methods: {
    async login () {
      try {
        let resp = await this.$auth.login(qs.stringify({
          email: this.username.toLowerCase(),
          password: this.pass
        }))
        if (resp.status === 200 && this.$auth.isAuthenticated()) {
          this.$toast.open({
            message: 'Success sign in!',
            type: 'is-success'
          })
          this.$store.commit('SUCCESS_LOGIN')
          this.$router.push('/deposit')
        } else {
          this.$toast.open({
            message: 'Sign in failed! Error: ' + resp.data.error,
            type: 'is-danger',
            duration: 5000
          })
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>
