<template>
  <div>
    <top></top>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
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
              <a class="button is-primary">Save</a>
            </b-field>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import BField from "buefy/src/components/field/Field";

export default {
  components: {
    BField,
    Top
  },
  data () {
    return {
      email: 'some@some.com'
    }
  }
}
</script>
