<template>
  <v-card class="mx-auto col-12 pa-0 general-card-horizontal">
    <v-list-item class="pa-0">
      <v-list-item-avatar tile size="80" class="ma-0">
        <v-img :src="imagePath"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold ml-5 d-flex justify-space-between">
          {{ title }}
          <v-card-actions
            v-if="buttonIcon"
            :class="{ 'general-card-horizontal__button': !displayButtonAlways }"
          >
            <general-button-fab
              :iconPath="buttonIcon"
              :color="buttonColor"
              @onClick="$emit('onClick', true)"
            />
          </v-card-actions>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class GeneralCardHorizontal extends Vue {
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly imagePath!: string
  @Prop({ default: false }) readonly buttonIcon!: string
  @Prop({ default: '#000' }) readonly buttonColor!: string
  @Prop({ default: true }) readonly displayButtonAlways!: string

  onClick() {}
}
</script>
