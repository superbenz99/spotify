<template>
  <v-card class="mx-auto" max-width="300" tile>
    <general-list :items="items" @onClick="router"> </general-list>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutPanelMenuList extends Vue {
  items = [
    { text: 'Home', icon: require('~/assets/svgs/layout/panel/home.svg'), routerPath: '/' },
    { text: 'Search', icon: require('~/assets/svgs/layout/panel/search.svg') },
    {
      text: 'Your Library',
      icon: require('~/assets/svgs/layout/panel/book.svg'),
    },
  ]

  router(index: number) {
    this.$router.push({
      path: this.items[index].routerPath,
    })
  }
}
</script>
