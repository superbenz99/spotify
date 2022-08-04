<template>
  <v-btn v-bind="$attrs" v-on="$listeners" rounded>
    <img v-if="hasPrependIcon" :src="iconPathPrepend" alt="icon prepend" />
    <span>{{ text }}</span>
    <img v-if="hasAppendIcon" :src="iconPathAppend" alt="icon append" />
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
    inheritAttrs: false
})
export default class GeneralButtonMenu extends Vue {
  @Prop({ default: '' }) readonly iconPathPrepend!: string
  @Prop({ default: '' }) readonly iconPathAppend!: string
  @Prop({ default: false }) readonly hasPrependIcon!: boolean
  @Prop({ default: false }) readonly hasAppendIcon!: boolean
  @Prop({ required: true }) readonly text!: boolean
}
</script>
