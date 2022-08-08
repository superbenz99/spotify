<template>
  <v-card
    class="mx-auto col-12 pa-0 general-card-vertical cursor-pointer"
    @click="$emit('onClickCard', true)"
  >
    <v-list-item class="pa-0 d-block">
      <v-list-item-avatar tile size="100%" class="ma-0">
        <v-img :src="imagePath"></v-img>
        <v-card-actions
          v-if="buttonIcon"
          class="general-card-vertical__position-absolute"
          :class="{ 'general-card-vertical__button': !displayButtonAlways }"
        >
          <general-button-fab
            :iconPath="buttonIcon"
            :color="buttonColor"
            @onClick="$emit('onClick', true)"
          />
        </v-card-actions>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle v-if="subtitle">
          {{ subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class GeneralCardVertical extends Vue {
  @Prop({ required: true }) readonly title!: string
  @Prop({ default: '' }) readonly subtitle!: string
  @Prop({ required: true }) readonly imagePath!: string
  @Prop({ default: false }) readonly buttonIcon!: string
  @Prop({ default: '#000' }) readonly buttonColor!: string
  @Prop({ default: true }) readonly displayButtonAlways!: string

  onClick() {}
}
</script>
