<template>
  <div class="media-player__container">
    <layout-media-player-now-playing :musicName="'Insomnia'" :artist="'Ink'" />
    <layout-media-player-controls />
    <layout-media-player-controls-append />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutMediaPlayer extends Vue {}
</script>
