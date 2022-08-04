<template>
  <div class="col-3 d-flex">
    <div class="nowPlaying__panel">
      <span>{{ musicName }}</span>
      <div>{{ artist }}</div>
    </div>
    <div>
      <img :src="likeIcon" @click="onLike()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class LayoutMediaPlayerNowPlaying extends Vue {
  @Prop({ required: true }) readonly musicName!: string
  @Prop({ required: true }) readonly artist!: string
  liked = false

  get likeIcon() {
    if (this.liked) {
      return require('~/assets/svgs/layout/mediaPlayer/heart-active.svg')
    }
    return require('~/assets/svgs/layout/mediaPlayer/heart.svg')
  }

  onLike() {
    this.liked = !this.liked
  }
}
</script>
