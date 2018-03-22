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
                <input class="input is-dark" type="email" placeholder="Email input">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input is-dark" type="password" placeholder="Password">
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
                  <input type="checkbox">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link is-dark" @click="register()">Register</button>
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
  methods: {
    register () {
      console.log('login')
    }
  }
}
</script>
