<template>
  <v-btn fab class="button__fab" @click="$emit('onClick', true)" :color="color">
    <img :src="iconPath" alt="general button fab" />
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class GeneralButtonFab extends Vue {
  @Prop({ required: true }) readonly iconPath!: string
  @Prop({ default: '#000' }) readonly color!: string
}
</script>
