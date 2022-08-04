<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <general-button-menu
        dark
        v-bind="{ ...attrs, ...$attrs }"
        v-on="on"
      ></general-button-menu>
    </template>

    <v-card>
      <slot name="menu-body"> </slot>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class GeneralMenu extends Vue {}
</script>
