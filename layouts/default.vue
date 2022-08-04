<template>
  <v-app dark>
    <v-navigation-drawer permanent fixed app>
      <layout-panel />
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="transparent"
      class="elevation-0"
    >
      <layout-header />
    </v-app-bar>
    <v-main class="ma-0 pa-0">
      <v-main>
        <Nuxt />
      </v-main>
    </v-main>
    <v-footer fixed app>
      <layout-media-player />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
