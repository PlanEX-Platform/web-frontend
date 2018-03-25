<template>
  <nav class="navbar is-dark">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          <div class="logo">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  x="0px" y="0px" viewBox="0 0 235.3 51.3" style="enable-background:new 0 0 235.3 51.3;" xml:space="preserve">
              <g>
                <path d="M0,0v50.7h10.6v-16h9.5c10.7,0,18.1-7,18.1-17.4C38.2,6.9,31,0,20.6,0H0L0,0z M10.6,8.4h7.2 c6.1,0,9.6,3.2,9.6,9c0,5.8-3.6,9-9.6,9h-7.2V8.4L10.6,8.4z M43.8,50.7h10.3V0H43.8V50.7L43.8,50.7z M75.6,43.9 c-3.5,0-5.8-1.8-5.8-4.6c0-2.7,2.2-4.4,6-4.7l7.9-0.5v2.7C83.7,41,80,43.9,75.6,43.9L75.6,43.9z M72.2,51.3c4.7,0,9.4-2.4,11.5-6.4 h0.2v5.8h9.9V24.8c0-7.6-6.3-12.6-16-12.6c-10,0-16.2,5-16.6,12.3h9.4c0.5-2.8,2.9-4.7,6.8-4.7c3.9,0,6.3,2,6.3,5.6V28l-9.5,0.6 c-9.4,0.6-14.7,4.5-14.7,11.4C59.6,46.7,65,51.3,72.2,51.3L72.2,51.3z M100.4,50.7h10.3V29.1c0-4.9,2.9-8.3,7.5-8.3 c4.6,0,6.9,2.8,6.9,7.7v22.2h10.3V26.4c0-8.8-4.7-14.1-13.1-14.1c-5.8,0-9.8,2.7-11.8,7.4h-0.2V13h-9.9V50.7L100.4,50.7z M176.4,42 h-23V29.1h21.7V21h-21.7V8.8h23V0h-33.6v50.7h33.6V42L176.4,42z M198.7,37.7l7.2,13.1H217l-11.7-19.1L217.1,13h-11.2l-6.7,12.7H199 L192.3,13h-11.6L192.4,32l-11.8,18.8h10.8l7.1-13.1H198.7z"></path>
                <polygon points="224.1,50.6 235.2,50.6 223.6,31.6 235.3,12.9 224.2,12.9 212.3,31.8" style="fill: #df353c"></polygon>
              </g>
            </svg>
          </div>
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link class="button is-dark" to="/account">Account</router-link>
            </p>
            <p class="control">
              <router-link class="button is-dark" to="/balance">Balances</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.logo svg {
  width: 82px;
  height: auto;
  fill: #fff;
}
</style>
