<template>
  <v-app dark>
    <v-navigation-drawer permanent fixed app>
      <layout-panel />
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      :color="bg"
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

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class DefaultLayout extends Vue {
  clipped: boolean = false
  drawer = false
  fixed = false
  bg = 'transparent'
  items = [
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
  ]
  miniVariant = false
  right = true
  rightDrawer = false
  title = 'Vuetify.js'

  mounted() {
    window.onscroll = () => {
      this.changeColor()
    }
  }

  changeColor() {
    if (
      document.body.scrollTop > 280 ||
      document.documentElement.scrollTop > 280
    ) {
      this.bg = 'rgb(72, 32, 176)'
    } else {
      this.bg = 'transparent'
    }
  }
}
</script>
