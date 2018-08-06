<template>
  <v-app id="app" dark>
    <banniere></banniere>
    <v-content>
      <router-view></router-view>
    </v-content>
    <pied></pied>
  </v-app>
</template>

<script>
import Banniere from './components/Banniere'
import Pied from './components/PiedDePage'

export default {
  name: 'App',
  components: {
    Banniere,
    Pied
  },
  data: () => ({
  })
}
</script>

<style>
.transition {
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -ms-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
  transition: all ease-in-out 0.2s;
}
.tabs__bar {
  position: fixed !important;
  width: 100%;
  z-index: 1;
}
</style>
