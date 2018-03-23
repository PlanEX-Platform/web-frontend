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
                <input class="input is-dark" v-model="username" type="email" placeholder="Email input">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input is-dark" v-model="password" type="password" placeholder="Password">
              </div>
            </div>

            <div class="field">
              <label class="label">Repeat Password</label>
              <div class="control">
                <input class="input is-dark" type="password" placeholder="Password">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <b-checkbox v-model="checkboxAgreementsFlag">
                    I agree to the <a href="#">terms and conditions</a>
                  </b-checkbox>
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link is-dark" @click="signup()">Register</button>
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
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
  data () {
    return {
      checkboxAgreementsFlag: false,
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
    async signup () {
      if (!this.validateEmail(this.username)) {
        this.$toast.open({
          message: 'Invalid email',
          type: 'is-danger'
        })
        return
      }
      // eslint-disable-next-line
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.password)) {
        this.$toast.open({
          message: `Password should contain at least one digit, one lower case, one upper case, 8 characters`,
          type: 'is-light',
          duration: 10000
        })
        return
      }
      if (!this.checkboxAgreementsFlag) {
        this.$toast.open({
          message: `Sorry you can't proceed without accepting our agreements`,
          type: 'is-info',
          duration: 10000
        })
        return
      }
      try {
        let resp = await this.$auth.register({
          email: this.username.toLowerCase(),
          password: this.password
        })
        if (resp.status === 200 && resp.data.status) {
          this.$toast.open({
            message: 'Success sign up!',
            type: 'is-success'
          })
          this.$router.push('/successsignup')
        } else {
          this.$toast.open({
            message: 'Sign up failed! ' + resp.data.error,
            type: 'is-danger'
          })
        }
      } catch (err) {
        console.log(err)
        this.$toast.open({
          message: 'Sign up failed!',
          type: 'is-danger'
        })
      }
    }
  }
}
</script>
