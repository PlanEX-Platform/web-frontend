<template>
  <div>
    <top></top>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input is-dark" type="email" v-model="username" placeholder="Email input">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input is-dark" v-model="password" type="password" placeholder="Password">
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link is-dark" @click="login()">Login</button>
              </div>
              <div class="control">
                <a class="button" href="/register">Registration</a>
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
import Top from '@/components/Top.vue'
import Bottom from '@/components/Bottom.vue'

export default {
  components: {
    Top,
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
      password: ''
    }
  },
  methods: {
    validateEmail (email) {
      // eslint-disable-next-line
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email.toLowerCase())
    },
    async login () {
      if (!this.validateEmail(this.username)) {
        this.$toast.open({
          message: 'Invalid email',
          type: 'is-danger'
        })
        return
      }
      if (this.password === '') {
        this.$toast.open({
          message: 'Could not use empty password',
          type: 'is-danger'
        })
        return
      }
      try {
        let resp = await this.$auth.login({
          email: this.username.toLowerCase(),
          password: this.password
        })
        if (resp.status === 200 && this.$auth.isAuthenticated()) {
          this.$toast.open({
            message: 'Success sign in!',
            type: 'is-success'
          })
          this.$router.push('/deposit')
        } else {
          this.$toast.open({
            message: 'Sign in failed! Error: ' + resp.data.error,
            type: 'is-danger',
            duration: 5000
          })
        }
      } catch (err) {
        console.log(err)
        this.$toast.open({
          message: 'Sign in failed!',
          type: 'is-danger'
        })
      }
    }
  }
}
</script>
