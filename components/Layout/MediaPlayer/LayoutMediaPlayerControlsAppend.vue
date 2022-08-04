<template>
  <div class="control-append__container col-3">
    <div class="control-append__item">
      <img :src="require('~/assets/svgs/layout/mediaPlayer/microphone.svg')" />
    </div>
    <div class="control-append__item">
      <img :src="require('~/assets/svgs/layout/mediaPlayer/queue.svg')" />
    </div>
    <div class="control-append__item">
      <img :src="require('~/assets/svgs/layout/mediaPlayer/device.svg')" />
    </div>
    <div class="control-append__item control-append__volumn">
      <img :src="require('~/assets/svgs/layout/mediaPlayer/volumn.svg')" />
      <general-slider />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutMediaPlayerControlsAppend extends Vue {}
</script>
