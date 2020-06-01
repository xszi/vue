<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

html {
  width: 100%;
  height: 100%;
  font-size: 10px !important;
}

body {
  margin: 1.5rem;
}
/* 实际的px = html.font-size * rem */

@media only screen and (max-width: 338px) {
  html {
    font-size: 9px !important;
  }
}

@media only screen and (min-width: 411px) {
  html {
    font-size: 11px !important;
  }
}

@media only screen and (min-width: 450px) {
  html {
    font-size: 12px !important;
  }
}

@media only screen and (min-width: 525px) {
  html {
    font-size: 14px !important;
  }
}

@media only screen and (min-width: 600px) {
  html {
    font-size: 16px !important;
  }
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 20px !important;
  }
}
</style>
