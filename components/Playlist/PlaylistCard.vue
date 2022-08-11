<template>
  <div class="d-flex playlist-card__container">
    <div>
      <v-img max-height="40" max-width="40" :src="imgCoverPath" />
    </div>
    <div>
      <div>
        <a class="playlist-card__title">{{ title }}</a>
      </div>
      <a class="playlist-card__subtitle">{{ subtitle }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class PagePlaylistCard extends Vue {
  @Prop({ required: true }) readonly imgCoverPath!: string
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly subtitle!: string
}
</script>
