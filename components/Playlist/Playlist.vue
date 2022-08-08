<template>
  <div>
    <playlist-header
      class="pt-6 pb-6"
      :imgCoverPath="require('~/static/liked_songs.png')"
      :title="'Liked Songs'"
      :subtitle="'Benz Anupong • 879 songs'"
      :imgSubtitlePath="require('~/assets/svgs/layout/header/user.svg')"
    />
    <playlist-action class="pt-6 pb-6" />
    <playlist-table />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class PagePlaylist extends Vue {}
</script>
