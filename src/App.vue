<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './styles/vars.styl'

.flex-body
  min-height 100vh
  display flex
  flex-flow column

.flex-1
  flex: 1

.mbox
  box-shadow $material-shadow
  padding .5rem
  border 1px solid rgba(0,0,0,0.2)
</style>

<style lang="scss">
$radius: 1px !default;
$radius-large: 2px;
$family-sans-serif: 'Roboto', 'Open Sans', 'Arial', sans-serif;
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #ff3d00;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
  "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: #b0bec5;

@import "~bulma";
@import "~buefy/src/scss/buefy";

.input:focus {
  border-color: rgba($color: #000, $alpha: .2);
  box-shadow: 0 0 2px 1px rgba($color: #000000, $alpha: .2)
}
</style>
