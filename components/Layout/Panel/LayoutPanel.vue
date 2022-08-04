<template>
  <div>
    <layout-panel-menu-list />
    <layout-panel-playlist />
    <layout-panel-cover />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutPanel extends Vue {}
</script>
