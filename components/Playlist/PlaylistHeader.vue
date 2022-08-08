<template>
  <div class="d-flex">
    <div class="mr-6">
      <v-img max-height="232" max-width="232" :src="imgCoverPath" />
    </div>
    <div class="align-self-end">
      <h5 class="mb-2">PLAYLIST</h5>
      <div class="text-h1 font-weight-bold mb-5">{{ title }}</div>
      <div>
        <img v-if="imgSubtitlePath" :src="imgSubtitlePath" />
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class PagePlaylistHeader extends Vue {
  @Prop({ required: true }) readonly imgCoverPath!: string
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly subtitle!: string
  @Prop() readonly imgSubtitlePath!: string
}
</script>
