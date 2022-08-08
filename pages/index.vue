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
            @onClickButton="
              resetSuggestionPlaylist() && handleButtonIcon(recentlyPlaylist, i)
            "
            @onClickCard="router(recentlyPlaylist, i)"
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
            @onClick="
              resetRecentlyPlaylist() && handleButtonIcon(suggestionPlaylist, i)
            "
            @onClickCard="router(suggestionPlaylist, i)"
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class HomePage extends Vue {
  recentlyPlaylist = [
    {
      title: 'Liked Songs',
      imagePath: require('~/static/liked_songs.png'),
      click: false,
      id: 1,
    },
    {
      title: 'Hot Hits Thailand',
      imagePath: require('~/static/hot_hits.jpeg'),
      click: false,
      id: 2,
    },
    {
      title: 'ฮิตติดกระแส',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
      id: 3,
    },
    {
      title: 'K-Pop Now',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
      id: 4,
    },
    {
      title: 'T-Pop Now',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
      id: 5,
    },
    {
      title: 'Cafe Now',
      imagePath: require('~/static/hit.jpeg'),
      click: false,
      id: 6,
    },
  ]

  suggestionPlaylist = [
    {
      title: 'Chill Mix',
      subtitle: 'Crush, SBGB, and more',
      imagePath: require('~/static/chill.jpeg'),
      click: false,
      id: 7,
    },
    {
      title: 'Ink Warantorn Mix',
      subtitle: 'Earth Patavee, BELL WARISARA and more',
      imagePath: require('~/static/inkMix.jpeg'),
      click: false,
      id: 8,
    },
    {
      title: 'Moody Mix',
      subtitle: 'NONT TANONT, Mirr and more',
      imagePath: require('~/static/moody.jpeg'),
      click: false,
      id: 9,
    },
    {
      title: 'K-Pop Now',
      subtitle: 'NONT TANONT, Mirr and more',
      imagePath: require('~/static/inkMix.jpeg'),
      click: false,
      id: 10,
    },
    {
      title: 'T-Pop Now',
      subtitle: 'NONT TANONT, Mirr and more',
      imagePath: require('~/static/inkMix.jpeg'),
      click: false,
      id: 11,
    },
  ]

  handleButtonIcon(list: any[], index: number) {
    list[index].click = !list[index].click
    const clicked = list.filter((f, i) => i !== index).find((f) => f.click)
    clicked && (clicked.click = false)
  }

  resetRecentlyPlaylist() {
    this.recentlyPlaylist.map((m) => (m.click = false))
    return true
  }

  resetSuggestionPlaylist() {
    this.suggestionPlaylist.map((m) => (m.click = false))
    return true
  }

  router(list: any, index: number) {
    this.$router.push({
      path: `/playlist/${list[index].id}`,
    })
  }
}
</script>
