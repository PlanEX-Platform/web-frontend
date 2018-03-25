<template>
  <div class="flex-body">
    <Header/>
    <section class="section flex-1">
      <div class="container">
        <div class="columns">
          <form class="column is-half">
            <h1 class="title">Account settings</h1>
            <b-field>
              <strong>Email address: </strong>{{email}}
            </b-field>

            <b-field label="Old Password">
              <b-input type="password"
                       placeholder="Old Password"
                       password-reveal>
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input type="password"
                       placeholder="New Password"
                       password-reveal>
              </b-input>
            </b-field>
            <b-field label="Password">
              <b-input type="password"
                       placeholder="Repeat Password"
                       password-reveal>
              </b-input>
            </b-field>
            <b-field>
              <a class="button is-dark">Save</a>
            </b-field>
          </form>
        </div>
      </div>
    </section>
    <bottom></bottom>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Bottom from '@/components/Bottom.vue'

export default {
  components: {
    Header,
    Bottom
  },
  data () {
    return {
      email: 'some@some.com'
    }
  },
  mounted () {

  }
}
</script>
