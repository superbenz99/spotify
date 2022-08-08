<template>
  <div class="d-flex">
    <v-btn class="mx-2 mr-8" fab dark large color="#1CDF63" @click="onPlay()">
      <img :src="playIconPath" />
    </v-btn>
    <div v-if="displayBtnOptions" class="d-flex align-self-center">
      <v-img height="32" width="32" :src="likeIconPath" @click="onLike()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class PagePlaylistAction extends Vue {
  displayBtnOptions = true
  playing = false
  liked = false

  onPlay() {
    this.playing = !this.playing
  }

  onLike() {
    this.liked = !this.liked
  }

  get playIconPath() {
    if (this.playing) {
      return require('~/assets/svgs/page/pause.svg')
    }
    return require('~/assets/svgs/page/play.svg')
  }

  get likeIconPath() {
    if (this.liked) {
      return require('~/assets/svgs/layout/mediaPlayer/heart-active.svg')
    }
    return require('~/assets/svgs/layout/mediaPlayer/heart.svg')
  }
}
</script>
