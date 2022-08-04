<template>
  <img :src="imgCoverPath" class="panel__cover"/>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class LayoutPanelCover extends Vue {
  @Prop({ default: require('~/static/ink.png') }) readonly imgCoverPath!: string
}
</script>
