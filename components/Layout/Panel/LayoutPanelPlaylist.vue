<template>
  <v-card class="mx-auto" max-width="300" tile>
    <general-list :items="options"> </general-list>
    <v-divider></v-divider>
    <general-list :items="userPlaylists"> </general-list>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutPanelPlaylist extends Vue {
  options = [
    {
      text: 'Create Playlist',
      icon: require('~/assets/svgs/layout/panel/add.svg'),
    },
    {
      text: 'Liked Songs',
      icon: require('~/static/liked_songs.png'),
    },
  ]
  userPlaylists = [
    { text: 'Real-Time' },
    { text: 'Audience' },
    { text: 'Conversions' },
  ]
}
</script>
