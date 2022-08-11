<template></template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class CallbackPage extends Vue {
  created() {
    const splitRoute = this.$route.hash.split('&')
    const accessName = '#access_token='
    const token = splitRoute[0].substring(
      accessName.length,
      splitRoute[0].length
    )
    this.$auth.setUserToken(token)
    this.$router.push({
      path: '/',
    })
  }
}
</script>
