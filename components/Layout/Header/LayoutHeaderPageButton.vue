<template>
  <div>
    <general-button-fab
      :iconPath="require('~/assets/svgs/layout/header/backward.svg')"
      @onClick="$router.back()"
    >
    </general-button-fab>
    <general-button-fab
      :iconPath="require('~/assets/svgs/layout/header/forward.svg')"
      @onClick="$router.forward()"
    >
    </general-button-fab>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutHeaderPageButton extends Vue {}
</script>
