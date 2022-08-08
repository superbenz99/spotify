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
        <div @click="onLogin()">Login</div>
      </template>
    </general-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutHeaderAccountButton extends Vue {
  async onLogin() {
    const token = await this.$auth.loginWith('spotify')
    console.log(token);
    
  }
}
</script>
