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
                <input
                  v-model="email"
                  @input="$v.email.$touch"
                  :class="{'is-danger': $v.email.$error, 'is-success': $v.email.$dirty && !$v.email.$invalid}"
                  class="input is-dark"
                  type="email"
                  placeholder="Email input">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="password"
                  @input="$v.password.$touch"
                  :class="{'is-danger': $v.password.$error, 'is-success': $v.password.$dirty && !$v.password.$invalid}"
                  class="input is-dark"
                  type="password"
                  placeholder="Password">
              </div>
            </div>

            <div class="field">
              <label class="label">Repeat Password</label>
              <div class="control">
                <input
                  v-model="pwdRepeat"
                  @input="$v.pwdRepeat.$touch"
                  :class="{'is-danger': $v.pwdRepeat.$error, 'is-success': $v.pwdRepeat.$dirty && !$v.pwdRepeat.$invalid}"
                  class="input is-dark"
                  type="password"
                  placeholder="Password">
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
                <button class="button is-text" @click="$router.push('/login')" v-text="'Cancel'"/>
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
import { email, required, sameAs, minLength } from 'vuelidate/lib/validators'

const isPassword = pwd => {
  if (pwd.length === 0) return false
  if (/[A-Z]/.test(pwd) === false) return false
  if (/\d/.test(pwd) === false) return false

  return true
}

export default {
  components: {
    Header,
    Bottom
  },
  data () {
    return {
      checkboxAgreementsFlag: false,
      email: '',
      password: '',
      pwdRepeat: ''
    }
  },
  validations: {
    checkboxAgreementsFlag: { required },
    email: { email, required },
    password: {
      isPassword, minLength: minLength(8)
    },
    pwdRepeat: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    validated () {
      this.$v.$touch()
      return !this.$v.$invalid
    }
  },
  mounted () {
  },
  methods: {
    async signup () {
      if (this.validated) {
        try {
          let resp = await this.$auth.register(qs.stringify({
            email: this.email.toLowerCase(),
            password: this.password
          }))
          if (resp.status === 200 && resp.data.status) {
            this.$toast.open({
              message: 'Success sign up!',
              type: 'is-success'
            })
            // this.$store.commit('SUCCESS_LOGIN') // change auth state
            this.$router.push('/')
          } else {
            this.$toast.open({
              message: 'Sign up failed! ' + resp.data.error,
              type: 'is-danger'
            })
          }
        } catch (err) {
          throw new Error(err)
        }
      } else {
        // err
      }
    }
  }
}
</script>
