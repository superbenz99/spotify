<template>
  <div>
    <v-data-table
      class="playlist-table__table--transparent"
      :headers="headers"
      :items="playlist"
      :hide-default-footer="true"
    >
      <template #header.duration>
        <img :src="require('~/assets/svgs/page/playlist/clock.svg')" />
      </template>
      <template #item.liked="{ item, value }">
        <img
          v-if="value"
          :src="require('~/assets/svgs/layout/mediaPlayer/heart-active.svg')"
        />
        <img
          v-if="!value"
          :src="require('~/assets/svgs/layout/mediaPlayer/heart.svg')"
        />
      </template>
      <template #item.title="{ item, value }">
        <playlist-card
          :title="item?.title"
          :subtitle="item?.artist"
          :imgCoverPath="item?.imgCoverPath"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { DataTableHeader } from 'vuetify'

@Component({})
export default class PagePlaylistTable extends Vue {
  @Prop({ required: true }) readonly playlist!: {
    order: number
    title: string
    artist: string
    imgCoverPath: string
    album: string
    liked: boolean
    duration: string
  }[]

  headers: DataTableHeader[] = [
    {
      text: '#',
      value: 'order',
      sortable: false,
    },
    {
      text: 'TITLE',
      value: 'title',
      sortable: false,
    },
    {
      text: 'ALBUM',
      value: 'album',
      sortable: false,
    },
    {
      text: '',
      value: 'liked',
      sortable: false,
    },
    {
      text: '',
      value: 'duration',
      sortable: false,
    },
  ]
}
</script>
