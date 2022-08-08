<template>
  <v-list dense>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      class="cursor-pointer"
      @click="$emit('onClick', i)"
    >
      <v-list-item-icon v-if="item.icon">
        <img :src="item.icon" />
      </v-list-item-icon>
      <v-list-item-content v-if="item.text">
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class GeneralList extends Vue {
  @Prop({ required: true }) items!: { text: string; icon: string }[]
}
</script>
