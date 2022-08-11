<template>
  <div>
    <general-menu
      :iconPathPrepend="require('~/assets/svgs/layout/header/user.svg')"
      :iconPathAppend="require('~/assets/svgs/layout/header/dropdown.svg')"
      :hasPrependIcon="true"
      :hasAppendIcon="true"
      :text="user"
    >
      <template #menu-body>
        <div @click="onLogin()">Login</div>
        <div @click="onLogout()">Logout</div>
      </template>
    </general-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import UserModule from '~/store/user.module'

@Component({})
export default class LayoutHeaderAccountButton extends Vue {
  onLogin() {
    this.$auth.loginWith('spotify')
  }

  onLogout() {
    this.$auth.logout()
    this.$router.go(0)
  }

  get user() {
    return this.$auth.user ? this.$auth.user.display_name : 'Login'
  }
}
</script>
