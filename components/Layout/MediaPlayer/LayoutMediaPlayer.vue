<template>
  <div class="media-player__container">
    <layout-media-player-now-playing :musicName="musicName" :artist="artist" />
    <layout-media-player-controls :audioSrc="audioSrc" />
    <layout-media-player-controls-append />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import * as MediaService from '~/services/media/media.service'

@Component({})
export default class LayoutMediaPlayer extends Vue {
  audioSrc =
    'https://p.scdn.co/mp3-preview/d1150fdb6f0ba5acebae31168b9e512731b64a50?cid=5d1dbdd190ae49f9af2c416537b6cf4c'
  musicName = ''
  artist = ''
  created() {
    MediaService.getPlaybackState().then((res) => {
      this.audioSrc = res.item.preview_url
      this.musicName = res.item.name
      this.artist = res.item.artists[0].name
    })
  }
}
</script>
