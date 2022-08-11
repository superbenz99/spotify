<template>
  <div>
    <playlist-header
      class="pt-6 pb-6"
      :imgCoverPath="imgCoverPath"
      :title="title"
      :subtitle="subtitle"
      :imgSubtitlePath="require('~/assets/svgs/layout/header/user.svg')"
    />
    <playlist-action class="pt-6 pb-6" />
    <playlist-table :playlist="playlist" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import * as PlaylistService from '~/services/playlist/playlist.service'
import { Item, TrackItem } from '~/types/dashboard/dashboard'
import * as moment from 'moment'

@Component({})
export default class PagePlaylist extends Vue {
  imgCoverPath = ''
  title = ''
  subtitle = ''
  playlist: {
    order: number
    title: string
    artist: string
    imgCoverPath: string
    album: string
    liked: boolean
    duration: string
  }[] = []
  created() {
    PlaylistService.getAlbumTracks(this.$route.params.id).then((res: Item) => {
      this.imgCoverPath = res.images[0].url
      this.title = res.name
      this.subtitle = `${res.artists[0].name} • ${res.total_tracks} songs`
      res.tracks.items.map((m: TrackItem) => {
        this.playlist.push({
          order: m.track_number,
          title: m.name,
          artist: m.artists[0].name,
          imgCoverPath: '',
          album: this.title,
          liked: false,
          duration: moment
            .utc(
              moment.duration(m.duration_ms, 'millisecond').as('milliseconds')
            )
            .format('m:ss'),
        })
      })
    })
  }
}
</script>
