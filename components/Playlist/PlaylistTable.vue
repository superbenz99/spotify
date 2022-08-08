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
          :src="require('~/assets/svgs/layout/mediaPlayer/heart-active.svg')"
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
import { Vue, Component } from 'nuxt-property-decorator'
import { DataTableHeader } from 'vuetify'

@Component({})
export default class PagePlaylistTable extends Vue {
  playlist = [
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
    {
      order: 1,
      title: 'Frozen Yogurt',
      artist: 'Elsa',
      imgCoverPath: require('~/static/moody.jpeg'),
      album: 'Frozen',
      dateAdd: '1 day ago',
      liked: true,
      duration: '3:00',
    },
  ]

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
      text: 'DATE ADD',
      value: 'dateAdd',
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
