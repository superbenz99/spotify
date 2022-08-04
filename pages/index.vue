<template>
  <div>
    <section class="mb-10">
      <div class="mb-5">
        <h2>Good afternoon</h2>
      </div>
      <v-row>
        <v-col cols="4" v-for="(recently, i) in recentlyPlaylist" :key="i">
          <general-card-horizontal
            :title="recently.title"
            :imagePath="recently.imagePath"
            :buttonIcon="
              recently.click
                ? require('~/assets/svgs/page/pause.svg')
                : require('~/assets/svgs/page/play.svg')
            "
            :buttonColor="'#1cdf63'"
            :displayButtonAlways="recently.click"
            @onClick="handleButtonIcon(recentlyPlaylist, i)"
          >
          </general-card-horizontal>
        </v-col>
      </v-row>
    </section>
    <section>
      <div class="mb-5">
        <h2>Your top mixes</h2>
      </div>
      <v-row>
        <v-col
          class="general-card-vertical__w-20"
          v-for="(suggestion, i) in suggestionPlaylist"
          :key="i"
        >
          <general-card-vertical
            :title="suggestion.title"
            :subtitle="suggestion?.subtitle"
            :imagePath="suggestion.imagePath"
            :buttonIcon="
              suggestion.click
                ? require('~/assets/svgs/page/pause.svg')
                : require('~/assets/svgs/page/play.svg')
            "
            :buttonColor="'#1cdf63'"
            :displayButtonAlways="suggestion.click"
            @onClick="handleButtonIcon(suggestionPlaylist, i)"
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class RecentlyPlaylist extends Vue {
  recentlyPlaylist = [
    {
      title: 'Liked Songs',
      imagePath: require('~/static/liked_songs.png'),
      click: false,
    },
    {
      title: 'Hot Hits Thailand',
      imagePath: require('~/static/hot_hits.jpeg'),
      click: false,
    },
    {
      title: 'ฮิตติดกระแส',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
    },
    {
      title: 'K-Pop Now',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
    },
    {
      title: 'T-Pop Now',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
    },
    {
      title: 'Cafe Now',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
    },
  ]

  suggestionPlaylist = [
    {
      title: 'Chill Mix',
      subtitle: 'Crush, SBGB, and more',
      imagePath: require('~/static/chill.jpeg'),
      click: false,
    },
    {
      title: 'Ink Warantorn Mix',
      subtitle: 'Earth Patavee, BELL WARISARA and more',
      imagePath: require('~/static/inkMix.jpeg'),
      click: false,
    },
    {
      title: 'Moody Mix',
      subtitle: 'NONT TANONT, Mirr and more',
      imagePath: require('~/static/moody.jpeg'),
      click: false,
    },
    {
      title: 'K-Pop Now',
      subtitle: 'NONT TANONT, Mirr and more',
      imagePath: require('~/static/inkMix.jpeg'),
      click: false,
    },
    {
      title: 'T-Pop Now',
      subtitle: 'NONT TANONT, Mirr and more',
      imagePath: require('~/static/inkMix.jpeg'),
      click: false,
    },
  ]

  handleButtonIcon(list: any[], index: number) {
    list[index].click = !list[index].click
    const clicked = list.filter((f, i) => i !== index).find((f) => f.click)
    clicked && (clicked.click = false)
  }
}
</script>
