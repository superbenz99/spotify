<template>
  <div class="control__container col-6">
    <div class="control__panel">
      <div class="control__panel--item">
        <img :src="require('~/assets/svgs/layout/mediaPlayer/suffle.svg')" />
      </div>
      <div class="control__panel--item">
        <img :src="require('~/assets/svgs/layout/mediaPlayer/previous.svg')" />
      </div>
      <div class="control__panel--item control-append__item" @click="onPlay()">
        <audio ref="player">
          <source :src="audioSrc" />
        </audio>
        <img :src="playingIcon" />
      </div>
      <div class="control__panel--item">
        <img :src="require('~/assets/svgs/layout/mediaPlayer/next.svg')" />
      </div>
      <div class="control__panel--item">
        <img :src="require('~/assets/svgs/layout/mediaPlayer/repeat.svg')" />
      </div>
    </div>
    <div class="control__seekbar">
      <div class="control__seekbar--time">00:00</div>
      <general-slider />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class LayoutMediaPlayerControls extends Vue {
  @Prop({ required: true }) readonly audioSrc!: string
  playing = false

  get playingIcon() {
    if (this.playing) {
      return require('~/assets/svgs/layout/mediaPlayer/pause.svg')
    }
    return require('~/assets/svgs/layout/mediaPlayer/play.svg')
  }

  onPlay() {
    this.playing = !this.playing
    if (this.playing) {
      this.$refs.player && (this.$refs.player as any).play()
    } else {
      this.$refs.player && (this.$refs.player as any).pause()
    }
  }
}
</script>
