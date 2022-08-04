<template>
  <v-slider hide-details="true" max="100" min="-100" color="#fff"></v-slider>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class GeneralSlider extends Vue {}
</script>
