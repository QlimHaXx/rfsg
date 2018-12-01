<template>
  <div class="banniere">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-content class="title">
              Fun Build
            </v-list-tile-content>
            <v-list-tile-action @click.stop="drawer = !drawer" class="text-xs-right">
              <v-btn icon>
                <v-icon>close</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense class="pt-0">
        <router-link to="/skins" class="">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>camera</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Skins
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/" class="">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>camera</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Drops
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/" class="">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>camera</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Camera
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue lighten-1"
      dense
      fixed
      flat
      app
    >
      <v-toolbar-side-icon class="hidden-md-and-up ml-0 pl-3" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="width: 22%" class="hidden-sm-and-down ml-0 pl-3" v-on:click="clicked ()">
        <v-icon class="mr-3">accessible_forward</v-icon>Fun Build</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/skins">Skins</v-btn>
        <v-btn flat to="/stream">Stream</v-btn>
        <v-btn flat>Drop</v-btn>
        <v-btn flat>Missions</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Banniere',
  data: () => ({
    drawer: false
  }),
  methods: {
    clicked () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: inherit;
    text-decoration: none;
  }
  .router-link-exact-active > *, .router-link-active > *{
    color: #CCC;
    -webkit-transition: all ease-in-out 0.2s;
    -moz-transition: all ease-in-out 0.2s;
    -ms-transition: all ease-in-out 0.2s;
    -o-transition: all ease-in-out 0.2s;
    transition: all ease-in-out 0.2s;
  }
  .router-link-exact-active:hover > *, .router-link-active:hover > *{
    color: #FFF;
    text-decoration: none;
    background-color: #42A5F5;
  }
  .toolbar__title {
    cursor: pointer;
  }
</style>
