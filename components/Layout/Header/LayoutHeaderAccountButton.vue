<template>
  <div>
    <general-menu
      :iconPathPrepend="require('~/assets/svgs/layout/header/user.svg')"
      :iconPathAppend="require('~/assets/svgs/layout/header/dropdown.svg')"
      :hasPrependIcon="true"
      :hasAppendIcon="true"
      :text="'Test User'"
    >
    <template #menu-body>
        <div>
            test
        </div>
    </template>
    </general-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutHeaderAccountButton extends Vue {}
</script>
