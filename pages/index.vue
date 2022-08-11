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
import * as DashboardService from '~/services/dashboard/dashboard.service'
import { AlbumsInterface } from '~/types/dashboard/dashboard'
import UserModule from '~/store/user.module'

@Component({})
export default class HomePage extends Vue {
  recentlyPlaylist: {
    title: string
    imagePath: string
    id: string
    click: boolean
  }[] = []
  created() {
    DashboardService.getNewReleases().then((res: AlbumsInterface) => {
      res.albums.items.map((m) => {
        this.recentlyPlaylist.push({
          title: m.name,
          imagePath: m.images[0].url,
          id: m.id,
          click: false,
        })
      })
    })
  }

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

  mounted() {
    if (!this.$auth.user) {
      this.$auth.fetchUser()
    }
    const user = this.$auth.user
    this.$auth.setUser(user)
    UserModule.setUser(user)
  }
}
</script>
